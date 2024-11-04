// ignore_for_file: public_member_api_docs

import '../../../config.dart';
import '../../../lint_analyzer.dart';
import '../../logger/logger.dart';
import '../models/flag_names.dart';
import 'base_command.dart';

class FixCommand extends BaseCommand {
  final LintAnalyzer _analyzer;
  final Logger _logger;

  @override
  String get name => 'fix';

  @override
  String get description =>
      'Automatically fix code issues based on lint rules and metrics.';

  @override
  String get invocation =>
      '${runner?.executableName} $name [arguments] <directories>';

  FixCommand(this._logger) : _analyzer = LintAnalyzer(_logger) {
    _addFlags();
  }

  @override
  Future<void> runCommand() async {
    _logger
      ..isSilent = isNoCongratulate
      ..isVerbose = isVerbose
      ..progress.start('Applying fixes');

    final parsedArgs = ParsedArguments.fromArgsNoMetrics(argResults);
    final config = ConfigBuilder.getLintConfigFromArgs(parsedArgs);

    // Run the analysis and apply fixes
    await _analyzer.runCliFix(
      argResults.rest,
      parsedArgs.rootFolder,
      config,
      sdkPath: findSdkPath(),
    );

    _logger.progress.complete('Fixes have been applied. Preparing the results:');
  }

  void _addFlags() {
    addCommonFlags();
    _usesExitOption();
  }

  void _usesExitOption() {
    argParser
      ..addSeparator('')
      ..addOption(
        FlagNames.setExitOnViolationLevel,
        allowed: ['noted', 'warning', 'alarm'],
        valueHelp: 'warning',
        help:
        'Set exit code 2 if code violations same or higher level than selected are detected.',
      )
      ..addFlag(
        FlagNames.fatalStyle,
        help: 'Treat style level issues as fatal.',
      )
      ..addFlag(
        FlagNames.fatalPerformance,
        help: 'Treat performance level issues as fatal.',
      )
      ..addFlag(
        FlagNames.fatalWarnings,
        help: 'Treat warning level issues as fatal.',
        defaultsTo: true,
      );
  }
}
