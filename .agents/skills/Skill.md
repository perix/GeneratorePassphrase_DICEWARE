
# Skill: secure-random-dice

## Overview
Questa skill espone una funzione Python per generare un numero casuale sicuro tra 1 e 6, equivalente al lancio di un dado fisico, utilizzando l’algoritmo crittograficamente sicuro `secrets.randbelow()`.[file:2]

## Entry point
- File: `random.py`
- Funzione principale esposta: `roll_dice()`

## API

### Funzione: `roll_dice()`

- **Descrizione**: Restituisce un intero casuale compreso tra 1 e 6 (estremi inclusi), generato con un RNG crittograficamente sicuro basato su entropia di sistema.[file:2]
- **Firma**: `roll_dice() -> int`
- **Argomenti**: Nessuno.
- **Valore di ritorno**:
  - `int`: valore compreso tra 1 e 6.

### Esempio di utilizzo

```python
from random import roll_dice

valore = roll_dice()
print(f"Risultato del dado: {valore}")
# Output tipico: Risultato del dado: 4
