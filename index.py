from fractions import gcd
import random

# Find least common multiplier
def lcm(a, b):
  return (a * b) // gcd(a, b)

# Find modular inverse of a with modulo m
def modInverse(a, m):
  x = 1

# Generate random prime number.

  while True:
    if ((a * x)- 1) % m == 0:
      return x
    x += 1


p = 7
q = 9
n = p * q




yn = lcm(p-1, q-1)

# public key randomly chosen
# 1 < e < yn
# e and yn must be coprime
e = random.randint(1, yn)

while e and gcd(e, yn) > 1:
  e = random.randint(1, yn)



# Private key mod inverse of e (mod yn)
d = modInverse(e, yn)

def encrypt(message):
  return (message**e) % n

def decrypt(cypherText):
  return cypherText**d % n

print decrypt(encrypt(25))