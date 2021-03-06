module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: 'Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color (hex)
    // cursorColor: '#F81CE5',

    // color of the text
    // foregroundColor: '#fff',

    // terminal background color
    backgroundColor: 'rgb(37,38,32)',

    // border color (window, tabs)
    borderColor: '#fff',

    // custom css to embed in the main window
    css: ``,

    // custom css to embed in the terminal window
    termCSS: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    visor: {
      hotkey: 'Command+Shift+Z',
      position: 'top', // or left, right, bottom
    },

    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list
    colors: [
      '#000000',
      '#ff3937',
      '#a6e22e',
      '#ffff00',
      '#0066ff',
      '#cc00ff',
      '#00ffff',
      '#d0d0d0',
      '#808080',
      '#ff3937',
      '#a6e22e',
      '#ffff00',
      '#0066ff',
      '#cc00ff',
      '#00ffff',
      '#ffffff'
    ]
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyperterm-blink",
    "hyperterm-bold-tab",
    "hyperterm-final-say",
    "hyperterm-mactabs",
    "hyperterm-subpixel-antialiased",
    "hyperterm-themed-scrollbar",
    "hyperterm-tinycursor",
    "hyperterm-visor"
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
