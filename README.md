# Sobre

Uma simples diretiva que se adapta à telefones com ou sem o nono dígito.

## Comportamento

**_ Número com o nono dígito _**

```
(99) 9 9999-9999
```

**_ Número sem o nono dígito _**

```
(99) 9999-9999
```

## Uso

Importe a diretiva dentro do módulo que deseja fazer uso:

```
import { TelefoneMask } from 'telefone-mask-ng2';
```

E faça a sua declaração dentro do módulo:

```
declarations: [
    ...
    TelefoneMask
    ...
  ],
```

Obs: Caso seja um modulo global ou reutilizável não esqueça também de fazer adicionar no array de exports.

Para usar a diretiva basta atribui-la em um input

```
<input TelefoneMask [(ngModel)]="User.Celular" type="text" />
```
