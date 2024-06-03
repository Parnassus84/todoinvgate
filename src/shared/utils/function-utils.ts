
export const compose = <R>(...fns: Array<(a: R) => R>) => fns.reduceRight((f, g) => (...args) => g(f(...args)));