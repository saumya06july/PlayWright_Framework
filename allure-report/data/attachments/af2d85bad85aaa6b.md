# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >>  Verify InValid Login
- Location: tests/Login.spec.ts:9:5

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/firefox-1511/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-2WKSpz -juggler-pipe -silent
  - <launched> pid=7317
  - [pid=7317][err] [7319] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=7317][err] Error: no DISPLAY environment variable specified
  - [pid=7317] <process did exit: exitCode=1, signal=null>
  - [pid=7317] starting temporary directories cleanup
  - [pid=7317] <gracefully close start>
  - [pid=7317] <kill>
  - [pid=7317] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=7317] finished temporary directories cleanup
  - [pid=7317] <gracefully close end>

```