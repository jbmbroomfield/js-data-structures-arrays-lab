let drivers = ['Milo','Otis','Garfield']

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

const appendDriver = name => drivers.concat(name)

const prependDriver = name => [name].concat(drivers)

const removeLastDriver = () => drivers.slice(0,drivers.length - 1)

const removeFirstDriver = () => drivers.slice(1)