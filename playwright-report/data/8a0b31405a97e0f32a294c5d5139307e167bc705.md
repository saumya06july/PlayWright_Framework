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
  - <launched> pid=7360
  - [pid=7360][err]
  - [pid=7360][err] (process:7366): Gtk-WARNING **: 17:54:37.016: Failed to open display
  - [pid=7360] <gracefully close start>
  - [pid=7360] <kill>
  - [pid=7360] <will force kill>
  - [pid=7360] <process did exit: exitCode=1, signal=null>
  - [pid=7360] starting temporary directories cleanup
  - [pid=7360] finished temporary directories cleanup
  - [pid=7360] <gracefully close end>

```