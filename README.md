# JoeVue CLI Tool

CLI tool help you create your vue file easily.

## Getting Started

To start using it just install it from npm and start using it.

### Installing

Install the package from npm

```
npm install -g joe-vue
```

## Configuration

Change default path for creating file (Don't forget about the '/' at the end ^_^, We will fix it next release)

```
joe-vue set:path newPath/
```

Change default path by selecting some of our preset configuration

For Vue js preset
```
joe-vue set:preset vue
```

For Laravel preset
```
joe-vue set:preset laravel
```

## How to use it

Create vue component file

```
joe-vue make:component FooComponent
```

Create vue view file

```
joe-vue make:view FooView
```

Create javascript file

```
joe-vue make:js FooScript
```

## Built With

* [Node js](https://nodejs.org) - The framework used.
* [commander](https://github.com/tj/commander.js/) - Helpful library for making CLI with Node js.

## Authors

* **Mosab Ibrahim** [Github](https://github.com/Miaababikir)
* **Omir Gibreel** [Github](https://github.com/comrade1996)

## At last

* Please contribute to our repo
* Any contribution we will appreciate it
* If there is any improvements and enhancement to the code base please submit it to us
* Thanx ^_^
