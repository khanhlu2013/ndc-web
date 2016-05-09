System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: "./src",
    "angular2-jwt": "node_modules/angular2-jwt/angular2-jwt.js"
  },
  //packages defines our app package
  packages: {
    app: {
      main: './bootstrap.ts',
      defaultExtension: 'ts'
    },
    "angular2-jwt": {
      defaultExtension: 'js'
    }          
  }
});