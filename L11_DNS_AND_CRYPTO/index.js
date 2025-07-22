// // <-------------------------------------------DNS------------------------------------------->

// const dns = require('dns');

// // 1. dns.lookup()----------------->
// // OS level pr kaam krta hai and returns first IP address of the hostname.
// dns.lookup('google.com', (err, address, family) => {            //hostname , options , callback(err, address, family)
//     if (err) throw err;
//     console.log(`Address: ${address}, IP version: IPv${family}`);
// });

// // 2. dns.resolve4() dns.resolve6()----------------->
// // resolve hostname to all ipv4 and ipv6 addresses use DNS protocol.
// // IPv4
// dns.resolve4('google.com', (err, addresses) => {
//   if (err) throw err;
//   console.log('IPv4 addresses:', addresses);
// });

// // IPv6
// dns.resolve6('google.com', (err, addresses) => {
//   if (err) throw err;
//   console.log('IPv6 addresses:', addresses);
// });


// // 3. dns.resolveMx()----------------->Get mail servers (MX records) of a domain.
// // resolves mail exchange records for the hostname. and use dns protocol to resolve
// // Useful for mail server configurations or email validation
// dns.resolveMx('gmail.com', (err, addresses) => {
//   if (err) throw err;
//   console.log('MX Records:', addresses);
// });



// // 4. dns.resolvens()----------------->Get name servers of a domain.
// // Check where a domain’s DNS is hosted
// dns.resolveNs('google.com', (err, addresses) => {
//   if (err) throw err;
//   console.log('NS Records:', addresses);
// });

// // 5. dns.resolveTxt()----------------->Get TXT records of a domain.
// // TXT records are often used for SPF, DKIM, and other verification purposes.
// // to verify domain ownership.
// dns.resolveTxt('google.com', (err, records) => {
//   if (err) throw err;
//   console.log('TXT Records:', records);
// });


// // 6. dns.resolveCname()----------------->Get CNAME records of a domain.
// // CNAME:- CANONICAL NAME
// dns.resolveCname('www.amazon.com', (err, addresses) => {
//   if (err) throw err;
//   console.log('CNAME Records:', addresses);
// });


// // 7. dns.reverse()----------------->Reverse lookup to get domain name from IP address.
// //  Performs reverse lookup (IP → hostname).
// dns.reverse('8.8.8.8', (err, hostnames) => {
//   if (err) throw err;
//   console.log('Hostnames:', hostnames);
// });


// // 8. dns.lookupService()----------------->Get service information for a given IP address.
// //  Translates an IP address and port number to a hostname and service 
// dns.lookupService('127.0.0.1', 80, (err, hostname, service) => {
//   if (err) throw err;
//   console.log(`Hostname: ${hostname}, Service: ${service}`);
// });

// // 9. dns.setServers() and dns.getServers()------------------>Set and get DNS servers.
// // setServers() sets custom DNS servers.
// // getServers() retrieves currently configured DNS servers.
// dns.setServers(['8.8.8.8', '8.8.4.4']);
// console.log('DNS Servers:', dns.getServers());

// // 10. dns.promises with async/await------------------>Using promises for DNS operations.
// const dnsPromises = require('dns').promises;

// async function runDNS() {
//   try {
//     const result = await dnsPromises.resolve4('google.com');
//     console.log('resolve4:', result);

//     const reverseResult = await dnsPromises.reverse('8.8.8.8');
//     console.log('reverse:', reverseResult);
//   } catch (err) {
//     console.error(err);
//   }
// }

// runDNS();


// <-------------------------------------------CRYPTO------------------------------------------->


const crypto = require('crypto');

// 1. Hashing----------------->Create a hash of data.
// Generate a hash of data using algorithms like sha256, md5, etc.
const hash = crypto.createHash('sha256').update('hello world').digest('hex');
console.log('SHA-256 Hash:', hash);

// update() feeds data to hash
// digest() finalizes and outputs it

// 2. HMAC----------------->Create a keyed hash using HMAC.
// Generate a Hash-based Message Authentication Code (HMAC).
const hmac = crypto.createHmac('sha256', 'secret-key').update('data-to-hash').digest('hex');
console.log('HMAC:', hmac);

// 3. crypto.randomBytes()----------------->Generate cryptographically secure random bytes.
// Generate random bytes for use in cryptographic operations.
// Token generation, OTPs, password salt, CSRF tokens.
crypto.randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log('Random bytes:', buffer.toString('hex'));
});


// 4.crypto.pbkdf2() (Password Hashing)----------------->Hash a password using PBKDF2.
// Derive a key from a password (used for password storage).
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log('Derived Key:', derivedKey.toString('hex'));
});


// 5. crypto.createCipheriv() and crypto.createDecipheriv()----------------->Encrypt and decrypt data.
// Encrypt data using a symmetric key algorithm (e.g., AES).

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// key and iv must match during encryption and decryption

// Encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Secret Message', 'utf8', 'hex');
encrypted += cipher.final('hex');

// Decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Encrypted:', encrypted);
console.log('Decrypted:', decrypted);



// 6. crypto.generateKeyPair() (Asymmetric)----------------->Generate public and private keys.
// Generate a public/private key pair for asymmetric encryption.

crypto.generateKeyPair('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, (err, publicKey, privateKey) => {
  if (err) throw err;
  console.log('Public Key:', publicKey);
  console.log('Private Key:', privateKey);
});


// 7. crypto.sign() and crypto.verify() (Digital Signatures)----------------->Sign and verify data.
// Create a digital signature for data and verify it using public key.
// Sign data with a private key and verify it using the public key.

const { generateKeyPairSync, sign, verify } = require('crypto');

// Generate keys
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Sign
const data = 'message';
const signature = sign('sha256', Buffer.from(data), privateKey);

// Verify
const isValid = verify('sha256', Buffer.from(data), publicKey, signature);
console.log('Signature Valid:', isValid);


// 8. crypto.timingSafeEqual() (Prevent timing attacks)----------------->Compare two buffers in constant time.
// Prevent timing attacks by comparing two buffers in constant time.

const a = Buffer.from('123456');
const b = Buffer.from('123457');
console.log('Safe Equal:', crypto.timingSafeEqual(a, b)); 


// 9. crypto.getHashes()----------------->Get available hash algorithms.
// List all available hash algorithms supported by the crypto module.
console.log(crypto.getHashes());
