// importando as dependẽncias
const bip32 = require(' bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

// Rede principal do Bitcoin - mainnet
// Rede de teste - testnet
const network = bitcoin.networks.testnet

// Derivação de carteiras HD
const path = `m/49' /1' /0' /0`

// Criar o mnemonic para a sedd (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// Criar a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

// Criar uma conta bitcoin (com pvt-pub Keys) e contas derivadas
let account - root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network
}).address

console.log("Carteira gerada:")
console.log("Endereço:", btcAddress)
console.log("Chave privada:", node.toWIF())
console.log("Seed:", mnemonic)

