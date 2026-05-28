# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >>  Verify Valid Login
- Location: tests/Login.spec.ts:5:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --no-startup-window
  - <launched> pid=7337
  - [pid=7337][err]
  - [pid=7337][err] (process:7343): Gtk-WARNING **: 17:54:36.259: Failed to open display
  - [pid=7337] <gracefully close start>
  - [pid=7337] <kill>
  - [pid=7337] <will force kill>
  - [pid=7337] <process did exit: exitCode=1, signal=null>
  - [pid=7337] starting temporary directories cleanup
  - [pid=7337] finished temporary directories cleanup
  - [pid=7337] <gracefully close end>

```