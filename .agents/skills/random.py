#!/usr/bin/env python3
"""
Tool per generare un numero casuale sicuro da 1 a 6 (come un dado).
Utilizza secrets.randbelow(), basato su os.urandom() per entropia del sistema.
Affidabile per usi critici, conforme a standard NIST.
"""

import secrets

def roll_dice():
    """Restituisce un intero casuale da 1 a 6."""
    return secrets.randbelow(6) + 1

if __name__ == "__main__":
    risultato = roll_dice()
    print(f"Numero casuale generato: {risultato}")
