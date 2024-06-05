# INVGATE - Coding Style Guide 📖

> Project based on React

We always seek to maintain order and cleanliness in our code.

## Table of contents
- [Naming 📄](#naming-📄)
- [Styling 🎨](#styling-🎨)
- [Discussions and Knowledge](#discussions-and-knowledge)

## Naming 📄

- Use **whole words** in names when possible.

- Use **`PascalCase`** for _types_, _enums (and its members)_, _classes_ and _interfaces_.

- Use **`T`**, **`I`** and **`E`** prefix respectivly before its name of **`Type`**, **`Interface`** and **`Enum`**. 

  For example:

```typescript

  // types
  type TMyType = TCustomeType | TBaseType;

  // enums (and their members)
  enum ESomeEnum {
    FirstMember,
    SecondMember
  }

  // classes
  class MyClass {...}

  // interfaces
  interface IMyInterface {...}

```

- Use **`camelCase`** for _functions_, _properties_ and _local variables_.

  For example:

```typescript

  // function
  export myFunction() {...}

  // properties
  export class MyClass {
    public myProperty: string;
  }

  // local variables
  export myFunction() {
    let myLocalVariable: string;
  }
```

- Use **underscore** ( **`_`** ) prefix for **PRIVATE** _properties_, _functions_
  and _injected internal dependencies (services, pipes, facades, etc)_.

For example:

```typescript

  // private properties
  export class MyClass {
    private _myPrivateProperty: string;
  }

  // private function
  private _myPrivate() {...}

  // injected internal dependencies
  export class MyClass {
    constructor(
      private _myService: MyService,
      private _myPipe: MyPipe,
      private _myStoreFacade: MyStoreFacade
    ) {...}
  }
```

- Use **UPPERCASE** for **constants**.

For example:

```typescript
const MY_CONSTANT: string = 'SAAS';
```

- Use **`isXXX`**, **`hasXXX`** or **`wassXXX`** for `boolean` variables representing
  state of things or flags.

For example:

```typescript
export class MyComponent {
  public isStateLoading: boolean;
  public hasComponentIcon: boolean;
  private _wasNameUpdated: boolean;
}
```

## Styling 🎨

- [Naming](#naming)
- [CSS](#css)

### Naming

- Use [BEM Nomenclature](http://getbem.com/naming/)

### CSS

- Use [BEM Nomenclature](http://getbem.com/naming/)
  For example: If we need to use `font-family-regular` color from **Tokens**.

.block {
  font-family: $dl-font-family-regular;
}
```

## Discussions and Knowledge
- [Types or Interfaces?](#types-or-interfaces)
  - [Useful table for Types vs Interfaces](#useful-table-for-types-vs-interfaces)
- [Union case](#union-case)
- [Typing Array](#typing-arrays)
- [Transform string to number](#transform-string-to-number)

### Types or Interfaces?

You can use either Types or Interfaces to type Props and State, so naturally the question arises - which do you use?. 
`Answer:` Use Interface until You Need Type.

##### Useful table for Types vs Interfaces

It's a nuanced topic, don't get too hung up on it. Here's a handy table:

<details>
<summary>Show me that amazing table</summary>

| Aspect                                          | Type | Interface |
| ----------------------------------------------- | :--: | :-------: |
| Can describe functions                          |  ✅  |    ✅     |
| Can describe constructors                       |  ✅  |    ✅     |
| Can describe tuples                             |  ✅  |    ✅     |
| Interfaces can extend it                        |  ⚠️  |    ✅     |
| Classes can extend it                           |  🚫  |    ✅     |
| Classes can implement it (`implements`)         |  ⚠️  |    ✅     |
| Can intersect another one of its kind           |  ✅  |    ⚠️     |
| Can create a union with another one of its kind |  ✅  |    🚫     |
| Can be used to create mapped types              |  ✅  |    🚫     |
| Can be mapped over with mapped types            |  ✅  |    ✅     |
| Expands in error messages and logs              |  ✅  |    🚫     |
| Can be augmented                                |  🚫  |    ✅     |
| Can be recursive                                |  ⚠️  |    ✅     |

⚠️ In some cases
</details>


### Union case

When we have this case:
```typescript
interface ICar {
  tires: number;
  color: string;
  model: 'audi' | 'nissan' | 'toyota';
}
```
You can use type to encapsulate a union type
```typescript
type TCarModel = 'audi' | 'nissan' | 'toyota';

interface ICar {
  tires: number;
  color: string;
  model: TCarModel;
}
```

### Typing Arrays

To standarize, it has been determined that **`Array<>`** form of typing will be used.

example
```typescript
// Correct code
interface IProduct {
  name: string;
  price: number;
  ...
  discounts: Array<IDiscount>;
}

// Incorrect code
interface IProduct {
  name: string;
  price: number;
  ...
  discounts: IDiscount[];
}
```

### Transform string to number
To standarize a just one way to transform string to number it has decided that it should be with **`.toString()`**.


example
```typescript
const price: number = 34;
// Correct code
const priceToString: string = price.toString();
// Incorrect code
const priceToString: string = `${price}`;
```




[⬆ Back to top](#markdown-header-table-of-contents)
