require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note meadow common gloom kite swear seed'; 
let testAccounts = [
"0x017b437950ae57cb69f5fb58991db0a8817e9ee99744be92ec724e8625bf11f2",
"0x53fa5382a25b48bd152ee9adbbfa4933f95a72a5e80746607cad11cb6cfd591f",
"0xc4ec853f21bc16c4e548de913248040091dc164a7a4195d156f3104620fd1553",
"0xf699f1c3c55361e87303daeb0acffcc176362dc960400358fc8fdf4322667def",
"0x78ee4aef3ec986e7555bd3698600ef04d2a2e144ebe82fa146cf8126a195f218",
"0x2a657ed0f291b6e0ffce551f74bbbe05c5806209a34e940165f61bbd19317166",
"0x1ad6e34900c3acf6019cfb80416897397c8c9c84caa4ac4f62f216cb558c75f9",
"0xdffc8fe9caff77dc75162672314f7f745d5719a5925bf9330144669a3fe0c387",
"0x34edcbf06b9712f2aa3379637f94ab5dd447663ec4968012587e2a9009f4aa02",
"0x5a4314ccefefbc423a1517ee7df4df67440e92a8edab9adb842c05a15b9205d0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
