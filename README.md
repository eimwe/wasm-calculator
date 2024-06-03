# WebAssembly calculator

Basic calculator that leverages WebAssembly for the core arithmetic operations (addition, subtraction, multiplication, and division).

- UI is built using JavaScript and HTML.
- Arithmetic operations are implemented in a C.

## Dependencies

- **Unix**-like OS (recommended)
- **Emscripten** (C/C++ compiler that targets WebAssembly)
- **Python** (to run http server)

## Project setup

1. Set up the environment:
   1. Install Python (if it's not already installed):
   ```
   sudo apt install python3
   ```
   2. Install Emscripten:
   ```
   sudo apt install emscripten
   ```
2. Add or expand the arithmetic operations inside `arithmetic.c` file;
3. Compile to WebAssembly:

```
emcc arithmetic.c -o arithmetic.js -s EXPORTED_FUNCTIONS="['_add', '_subtract', '_multiply', '_divide']" -s MODULARIZE -s EXPORT_ES6
```

4. Run server:

```
python3 -m http.server
```

5. Open `localhost` in the browser using the port designated by the server
