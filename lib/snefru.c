/*
  This is an implementation of Snefru. Snefru is a one-way hash
  function that provides authentication. It does not provide secrecy.

  Snefru is named after a Pharaoh of ancient Egypt.

  Copyright (c) Xerox Corporation 1989. All rights reserved.

  License to copy and use this software is granted provided that it is
  identified as the "Xerox Secure Hash Function" in all material mentioning
  or referencing this software or this hash function.

  License is also granted to make and use derivative works provided that such
  works are identified as "derived from the Xerox Secure Hash Function" in
  all material mentioning or referencing the derived work.

  Xerox Corporation makes no representations concerning either the
  merchantability of this software or the suitability of this software for
  any particular purpose.  It is provided "as is" without express or implied
  warranty of any kind.

  These notices must be retained in any copies of any part of this software.

  Updated information about Snefru is available from arisia.xerox.com in
  directory /pub/hash by anonymous FTP.  The README file provides a quick
  introduction.

  This is version 2.5a, November 29, 1990.
  Version 2.5a provides a reasonably understandable and efficient
  implementation of Snefru.  Further, this version provides
  8 passes.  While 4 pass Snefru has not been broken, the use
  of 4 pass Snefru for production use is not recommended at
  this time.  Further study of the security of Snefru is
  required before production use is advisable.

  This program reads from the standard input until EOF is reached (the first
  "read" that returns 0 bytes).  The data on the standard input is "hashed"
  with a cryptographically secure one-way hash function (also known as a
  "message digest", "fingerprint", "Manipulation Detection Code" or "MDC").
  The hash is then printed on the standard output.

  The input can be of any size.  The output is 128 bits printed as 32
  characters in hex.  The output size can be changed to 256 bits be setting
  the parameter OUTPUT_BLOCK_SIZE to 8.  (The 8 indicates the number of
  32-bit words in the output).

  The primary use of one-way hash functions is to determine if there have been
  any unauthorized, malicious, or accidental changes made to a file.  For
  example, if an executable program file produces the hash "209884c4
  2e89d967 5456ac0e 61269550", then any change to that program file will
  cause the hash to be changed.  Thus, the tampering can be detected by
  comparing the current output value with the previously computed (and
  presumably correct) output value.

  Hash512 is the centrol routine in this program.  It is used in this program in
  a linear fashion -- i.e., a sequential file is hashed down by repeated
  applications of Hash512.  Changing a single bit in the file would then
  require completely re-computing the hash from the point of change onward.

  Hash512 can be used in a tree-structured fashion to authenticate a large table
  of data. This would imply that changing a single bit would not force a
  complete re-computation of the hash value, but would instead require only
  log n re-computations of Hash512 to "patch up" the changes along the path
  from the root to the changed leaf entry. A tree-structured application
  also has the advantage that any single entry in the table can subsequently
  be authenticated by someone who knows only the "authentication path" from
  the root of the tree to the leaf entry.  These concepts are discussed more
  thoroughly in "Secrecy, Authentication, and Public Key Systems" by Ralph
  C. Merkle, UMI Research Press, 1982 (see particularly Chapter 2, "One Way
  Hash Functions").  The use of a tree-structured pattern of applications of
  a one-way hash function is covered by U.S. Patent #4,309,569, "Method of
  Providing Digital Signatures" (contact Stanford University, Office of
  Technology Licensing).


  At the present time (November 29, 1990) the author knows of no method for
  "breaking" this one-way function, (i.e., finding two input files that
  produce the same output value).

  We recommend against the use of output sizes smaller than 128 bits, and
  against the use of an input that is less than 2 (two) words larger than
  the size of the output.  When the input size equals the output size,
  Snefru suffers a serious degradation in security (an observation due to
  Coppersmith).

  Further study and validation of the security of Snefru is required prior
  to production use.

  If anyone using this program finds two different inputs that produce the same
  output, please contact Ralph C. Merkle via E-mail (merkle@xerox.com) or
  via normal mail at: Xerox PARC 3333 Coyote Hill Road Palo Alto, CA 94304
  (415) 494-4000


  See the paper "A Fast Software One Way Hash Function" by Ralph C. Merkle,
  to appear in The Journal of Cryptology, for a more detailed explanation.

  The following test cases were taken directly from a terminal, and can be used
  to verify the correct functioning of an implementation of Snefru.  The
  first input is simply a carriage return followed by control-d.  The second
  input is "1" followed by carriage return followed by control-d, the third
  input is "12" followed by carriage return followed by control-d, etc.
  (In some cases, two control-d's will be required).

Note that the test cases given are from 8-pass Snefru (e.g., SECURITY_LEVEL=8)

% ./snefru

 d9fcb317 1c097fbb a8c8f12a a0906bad
% ./snefru
1
 44ec420c e99c1f62 feb66c53 c24ae453
% ./snefru
12
 7182051a a852ef6f ba4b6c9c 9b79b317
% ./snefru
123
 bc3a50af 82bf56d6 a64732bc 7b050a93
% ./snefru
1234
 c5b8a049 85a8eadf b4331a89 88752b77
% ./snefru
12345
 d559a2b6 2f6f4411 1324f852 08723707
% ./snefru
123456
 6cfb5e8f 1da02bd1 67b01e48 16686c30
% ./snefru
1234567
 29aa4832 5f275a8a 7a01ba15 43c54ba5
% ./snefru
12345678
 be862a6b 68b7df88 7ebe0031 9cbc4a47
% ./snefru
123456789
 6103721c cd8ad565 d68e90b0 f8906163
%


The following outputs were obtained after the program was
compiled with OUTPUT_BLOCK_SIZE set to 8.  This can be done
by using the -D option on cc, as:
cc -o snefru256 -DOUTPUT_BLOCK_SIZE=8 snefru.c

Note that the test cases given are from 8-pass Snefru (e.g., SECURITY_LEVEL=8)

% ./snefru256

 2e02687f 0d45d5b9 b50cb68c 3f33e684 3d618a1a ca2d0689 3d3eb4e3 026b5732
% ./snefru256
1
 bfea4a05 a2a2ef15 c736d114 598a20b9 d9bd4d66 b661e6b0 5ecf6a77 37bdc58c
% ./snefru256
12
 ac677d69 761ade3f 189c7aef 106d5fe7 392d324e 19cc76d5 db4a2c05 f2cc2cc5
% ./snefru256
123
 061c76aa 1db4a22c 0e42945e 26c48499 b5400162 e08c640b e05d3c00 7c44793d
% ./snefru256
1234
 1e87fe1d 9c927e9e 24be85e3 cc733598 73541640 a6261793 ce5a9749 53113f5e
% ./snefru256
12345
 1b59927d 85a9349a 87796620 fe2ff401 a06a7ba4 8794498e bab978ef c3a68912
% ./snefru256
123456
 28e9d9bc 35032b68 faeda881 01ecb252 4317e9da 111b0e3e 70941072 12d9cf72
% ./snefru256
1234567
 f7fff4ee 74fd1b8d 6b3267f8 4e47e007 f029d13b 8af7e37e 34d13b46 9b8f248f
% ./snefru256
12345678
 ee7d64b0 102b2205 e9892661 3b200185 559d08be 6ad787da 717c9687 44e11af3
% ./snefru256
123456789
 4ca72639 e40e9ab9 c0c3f523 c4449b39 11632d37 4c124d77 02192ec2 e4e0b7a3
%

  Note that "word32" MUST be 32 bits

  Implementor:  Ralph C. Merkle

 */

#include <stdio.h>
#include <stdlib.h>
#define INPUT_BLOCK_SIZE 16 /* size in 32-bit words of an input block to \
                             * the hash routine  */
/*
 * OUTPUT_BLOCK_SIZE may be set to either 4 or 8.  8 should provide
 * a higher level of security (if we presume Snefru can only be broken
 * by a brute force attack, than an output size of 8 words or 256 bits
 * would require some 2**128 operations to break).  The default is 4.
 * This parameter can be changed with the -DOUTPUT_BLOCK_SIZE=8
 * command line option to the C compiler.
 */
#ifndef OUTPUT_BLOCK_SIZE
#define OUTPUT_BLOCK_SIZE 4 /* size in 32-bit words of an output block \
                             * from the hash routine */
#endif
#define CHUNK_SIZE (INPUT_BLOCK_SIZE - OUTPUT_BLOCK_SIZE)
/* generate a mask with log-to-the-base-2(INPUT_BLOCK_SIZE) "1" bits  */
#define MASK (INPUT_BLOCK_SIZE - 1)

#define round(L, C, N, SB) \
    SBE = SB[C & 0xffL];   \
    L ^= SBE;              \
    N ^= SBE
#define rotate(B) B = (B >> shift) | (B << leftShift)

/*
 * The following parameter can be set to 2 thru 8. 8 represents higher
 * security, and is one fourth the speed of 2.  Default is 8.  This
 * parameter can be changed by the -DSECURITY_LEVEL=<n> command
 * line option to the C compiler.
 */
#ifndef SECURITY_LEVEL
#define SECURITY_LEVEL 8
#endif
#define MAX_SBOX_COUNT 16

/*  Identify this version for the "what" command */
char ident[] = "@(#) Snefru Version 2.5a November 29, 1990";

typedef unsigned long int word32;
/* The standard S-Box  */
word32 standardSBoxes[MAX_SBOX_COUNT][256] = {

    {/* Start of S Box 0  */

     /*   0*/ 0x64f9001bL, 0xfeddcdf6L, 0x7c8ff1e2L, 0x11d71514L, 0x8b8c18d3L,
     /*   5*/ 0xdddf881eL, 0x6eab5056L, 0x88ced8e1L, 0x49148959L, 0x69c56fd5L,
     /*  10*/ 0xb7994f03L, 0x0fbcee3eL, 0x3c264940L, 0x21557e58L, 0xe14b3fc2L,
     /*  15*/ 0x2e5cf591L, 0xdceff8ceL, 0x092a1648L, 0xbe812936L, 0xff7b0c6aL,
     /*  20*/ 0xd5251037L, 0xafa448f1L, 0x7dafc95aL, 0x1ea69c3fL, 0xa417abe7L,
     /*  25*/ 0x5890e423L, 0xb0cb70c0L, 0xc85025f7L, 0x244d97e3L, 0x1ff3595fL,
     /*  30*/ 0xc4ec6396L, 0x59181e17L, 0xe635b477L, 0x354e7dbfL, 0x796f7753L,
     /*  35*/ 0x66eb52ccL, 0x77c3f995L, 0x32e3a927L, 0x80ccaed6L, 0x4e2be89dL,
     /*  40*/ 0x375bbd28L, 0xad1a3d05L, 0x2b1b42b3L, 0x16c44c71L, 0x4d54bfa8L,
     /*  45*/ 0xe57ddc7aL, 0xec6d8144L, 0x5a71046bL, 0xd8229650L, 0x87fc8f24L,
     /*  50*/ 0xcbc60e09L, 0xb6390366L, 0xd9f76092L, 0xd393a70bL, 0x1d31a08aL,
     /*  55*/ 0x9cd971c9L, 0x5c1ef445L, 0x86fab694L, 0xfdb44165L, 0x8eaafcbeL,
     /*  60*/ 0x4bcac6ebL, 0xfb7a94e5L, 0x5789d04eL, 0xfa13cf35L, 0x236b8da9L,
     /*  65*/ 0x4133f000L, 0x6224261cL, 0xf412f23bL, 0xe75e56a4L, 0x30022116L,
     /*  70*/ 0xbaf17f1fL, 0xd09872f9L, 0xc1a3699cL, 0xf1e802aaL, 0x0dd145dcL,
     /*  75*/ 0x4fdce093L, 0x8d8412f0L, 0x6cd0f376L, 0x3de6b73dL, 0x84ba737fL,
     /*  80*/ 0xb43a30f2L, 0x44569f69L, 0x00e4eacaL, 0xb58de3b0L, 0x959113c8L,
     /*  85*/ 0xd62efee9L, 0x90861f83L, 0xced69874L, 0x2f793ceeL, 0xe8571c30L,
     /*  90*/ 0x483665d1L, 0xab07b031L, 0x914c844fL, 0x15bf3be8L, 0x2c3f2a9aL,
     /*  95*/ 0x9eb95fd4L, 0x92e7472dL, 0x2297cc5bL, 0xee5f2782L, 0x5377b562L,
     /* 100*/ 0xdb8ebbcfL, 0xf961deddL, 0xc59b5c60L, 0x1bd3910dL, 0x26d206adL,
     /* 105*/ 0xb28514d8L, 0x5ecf6b52L, 0x7fea78bbL, 0x504879acL, 0xed34a884L,
     /* 110*/ 0x36e51d3cL, 0x1753741dL, 0x8c47caedL, 0x9d0a40efL, 0x3145e221L,
     /* 115*/ 0xda27eb70L, 0xdf730ba3L, 0x183c8789L, 0x739ac0a6L, 0x9a58dfc6L,
     /* 120*/ 0x54b134c1L, 0xac3e242eL, 0xcc493902L, 0x7b2dda99L, 0x8f15bc01L,
     /* 125*/ 0x29fd38c7L, 0x27d5318fL, 0x604aaff5L, 0xf29c6818L, 0xc38aa2ecL,
     /* 130*/ 0x1019d4c3L, 0xa8fb936eL, 0x20ed7b39L, 0x0b686119L, 0x89a0906fL,
     /* 135*/ 0x1cc7829eL, 0x9952ef4bL, 0x850e9e8cL, 0xcd063a90L, 0x67002f8eL,
     /* 140*/ 0xcfac8cb7L, 0xeaa24b11L, 0x988b4e6cL, 0x46f066dfL, 0xca7eec08L,
     /* 145*/ 0xc7bba664L, 0x831d17bdL, 0x63f575e6L, 0x9764350eL, 0x47870d42L,
     /* 150*/ 0x026ca4a2L, 0x8167d587L, 0x61b6adabL, 0xaa6564d2L, 0x70da237bL,
     /* 155*/ 0x25e1c74aL, 0xa1c901a0L, 0x0eb0a5daL, 0x7670f741L, 0x51c05aeaL,
     /* 160*/ 0x933dfa32L, 0x0759ff1aL, 0x56010ab8L, 0x5fdecb78L, 0x3f32edf8L,
     /* 165*/ 0xaebedbb9L, 0x39f8326dL, 0xd20858c5L, 0x9b638be4L, 0xa572c80aL,
     /* 170*/ 0x28e0a19fL, 0x432099fcL, 0x3a37c3cdL, 0xbf95c585L, 0xb392c12aL,
     /* 175*/ 0x6aa707d7L, 0x52f66a61L, 0x12d483b1L, 0x96435b5eL, 0x3e75802bL,
     /* 180*/ 0x3ba52b33L, 0xa99f51a5L, 0xbda1e157L, 0x78c2e70cL, 0xfcae7ce0L,
     /* 185*/ 0xd1602267L, 0x2affac4dL, 0x4a510947L, 0x0ab2b83aL, 0x7a04e579L,
     /* 190*/ 0x340dfd80L, 0xb916e922L, 0xe29d5e9bL, 0xf5624af4L, 0x4ca9d9afL,
     /* 195*/ 0x6bbd2cfeL, 0xe3b7f620L, 0xc2746e07L, 0x5b42b9b6L, 0xa06919bcL,
     /* 200*/ 0xf0f2c40fL, 0x72217ab5L, 0x14c19df3L, 0xf3802daeL, 0xe094beb4L,
     /* 205*/ 0xa2101affL, 0x0529575dL, 0x55cdb27cL, 0xa33bddb2L, 0x6528b37dL,
     /* 210*/ 0x740c05dbL, 0xe96a62c4L, 0x40782846L, 0x6d30d706L, 0xbbf48e2cL,
     /* 215*/ 0xbce2d3deL, 0x049e37faL, 0x01b5e634L, 0x2d886d8dL, 0x7e5a2e7eL,
     /* 220*/ 0xd7412013L, 0x06e90f97L, 0xe45d3ebaL, 0xb8ad3386L, 0x13051b25L,
     /* 225*/ 0x0c035354L, 0x71c89b75L, 0xc638fbd0L, 0x197f11a1L, 0xef0f08fbL,
     /* 230*/ 0xf8448651L, 0x38409563L, 0x452f4443L, 0x5d464d55L, 0x03d8764cL,
     /* 235*/ 0xb1b8d638L, 0xa70bba2fL, 0x94b3d210L, 0xeb6692a7L, 0xd409c2d9L,
     /* 240*/ 0x68838526L, 0xa6db8a15L, 0x751f6c98L, 0xde769a88L, 0xc9ee4668L,
     /* 245*/ 0x1a82a373L, 0x0896aa49L, 0x42233681L, 0xf62c55cbL, 0x9f1c5404L,
     /* 250*/ 0xf74fb15cL, 0xc06e4312L, 0x6ffe5d72L, 0x8aa8678bL, 0x337cd129L,
     /* 255*/ 0x8211cefdL
     /* End   of S Box 0  */},

    {/* Start of S Box 1  */

     /*   0*/ 0x074a1d09L, 0x52a10e5aL, 0x9275a3f8L, 0x4b82506cL, 0x37df7e1bL,
     /*   5*/ 0x4c78b3c5L, 0xcefab1daL, 0xf472267eL, 0xb63045f6L, 0xd66a1fc0L,
     /*  10*/ 0x400298e3L, 0x27e60c94L, 0x87d2f1b8L, 0xdf9e56ccL, 0x45cd1803L,
     /*  15*/ 0x1d35e098L, 0xcce7c736L, 0x03483bf1L, 0x1f7307d7L, 0xc6e8f948L,
     /*  20*/ 0xe613c111L, 0x3955c6ffL, 0x1170ed7cL, 0x8e95da41L, 0x99c31bf4L,
     /*  25*/ 0xa4da8021L, 0x7b5f94fbL, 0xdd0da51fL, 0x6562aa77L, 0x556bcb23L,
     /*  30*/ 0xdb1bacc6L, 0x798040b9L, 0xbfe5378fL, 0x731d55e6L, 0xdaa5bfeeL,
     /*  35*/ 0x389bbc60L, 0x1b33fba4L, 0x9c567204L, 0x36c26c68L, 0x77ee9d69L,
     /*  40*/ 0x8aeb3e88L, 0x2d50b5ceL, 0x9579e790L, 0x42b13cfcL, 0x33fbd32bL,
     /*  45*/ 0xee0503a7L, 0xb5862824L, 0x15e41eadL, 0xc8412ef7L, 0x9d441275L,
     /*  50*/ 0x2fcec582L, 0x5ff483b7L, 0x8f3931dfL, 0x2e5d2a7bL, 0x49467bf9L,
     /*  55*/ 0x0653dea9L, 0x2684ce35L, 0x7e655e5cL, 0xf12771d8L, 0xbb15cc67L,
     /*  60*/ 0xab097ca1L, 0x983dcf52L, 0x10ddf026L, 0x21267f57L, 0x2c58f6b4L,
     /*  65*/ 0x31043265L, 0x0bab8c01L, 0xd5492099L, 0xacaae619L, 0x944ce54aL,
     /*  70*/ 0xf2d13d39L, 0xadd3fc32L, 0xcda08a40L, 0xe2b0d451L, 0x9efe08aeL,
     /*  75*/ 0xb9d50fd2L, 0xea5cd7fdL, 0xc9a749ddL, 0x13ea2253L, 0x832debaaL,
     /*  80*/ 0x24be640fL, 0xe03e926aL, 0x29e01cdeL, 0x8bf59f18L, 0x0f9d00b6L,
     /*  85*/ 0xe1238b46L, 0x1e7d8e34L, 0x93619adbL, 0x76b32f9fL, 0xbd972cecL,
     /*  90*/ 0xe31fa976L, 0xa68fbb10L, 0xfb3ba49dL, 0x8587c41dL, 0xa5add1d0L,
     /*  95*/ 0xf3cf84bfL, 0xd4e11150L, 0xd9ffa6bcL, 0xc3f6018cL, 0xaef10572L,
     /* 100*/ 0x74a64b2fL, 0xe7dc9559L, 0x2aae35d5L, 0x5b6f587fL, 0xa9e353feL,
     /* 105*/ 0xca4fb674L, 0x04ba24a8L, 0xe5c6875fL, 0xdcbc6266L, 0x6bc5c03fL,
     /* 110*/ 0x661eef02L, 0xed740babL, 0x058e34e4L, 0xb7e946cfL, 0x88698125L,
     /* 115*/ 0x72ec48edL, 0xb11073a3L, 0xa13485ebL, 0xa2a2429cL, 0xfa407547L,
     /* 120*/ 0x50b76713L, 0x5418c37dL, 0x96192da5L, 0x170bb04bL, 0x518a021eL,
     /* 125*/ 0xb0ac13d1L, 0x0963fa2aL, 0x4a6e10e1L, 0x58472bdcL, 0xf7f8d962L,
     /* 130*/ 0x979139eaL, 0x8d856538L, 0xc0997042L, 0x48324d7aL, 0x447623cbL,
     /* 135*/ 0x8cbbe364L, 0x6e0c6b0eL, 0xd36d63b0L, 0x3f244c84L, 0x3542c971L,
     /* 140*/ 0x2b228dc1L, 0xcb0325bbL, 0xf8c0d6e9L, 0xde11066bL, 0xa8649327L,
     /* 145*/ 0xfc31f83eL, 0x7dd80406L, 0xf916dd61L, 0xd89f79d3L, 0x615144c2L,
     /* 150*/ 0xebb45d31L, 0x28002958L, 0x56890a37L, 0xf05b3808L, 0x123ae844L,
     /* 155*/ 0x86839e16L, 0x914b0d83L, 0xc506b43cL, 0xcf3cba5eL, 0x7c60f5c9L,
     /* 160*/ 0x22deb2a0L, 0x5d9c2715L, 0xc77ba0efL, 0x4f45360bL, 0xc1017d8bL,
     /* 165*/ 0xe45adc29L, 0xa759909bL, 0x412cd293L, 0xd7d796b1L, 0x00c8ff30L,
     /* 170*/ 0x23a34a80L, 0x4ec15c91L, 0x714e78b5L, 0x47b9e42eL, 0x78f3ea4dL,
     /* 175*/ 0x7f078f5bL, 0x346c593aL, 0xa3a87a1aL, 0x9bcbfe12L, 0x3d439963L,
     /* 180*/ 0xb2ef6d8eL, 0xb8d46028L, 0x6c2fd5caL, 0x62675256L, 0x01f2a2f3L,
     /* 185*/ 0xbc96ae0aL, 0x709a8920L, 0xb4146e87L, 0x6308b9e2L, 0x64bda7baL,
     /* 190*/ 0xafed6892L, 0x6037f2a2L, 0xf52969e0L, 0x0adb43a6L, 0x82811400L,
     /* 195*/ 0x90d0bdf0L, 0x19c9549eL, 0x203f6a73L, 0x1accaf4fL, 0x89714e6dL,
     /* 200*/ 0x164d4705L, 0x67665f07L, 0xec206170L, 0x0c2182b2L, 0xa02b9c81L,
     /* 205*/ 0x53289722L, 0xf6a97686L, 0x140e4179L, 0x9f778849L, 0x9a88e15dL,
     /* 210*/ 0x25cadb54L, 0xd157f36fL, 0x32a421c3L, 0xb368e98aL, 0x5a92cd0dL,
     /* 215*/ 0x757aa8d4L, 0xc20ac278L, 0x08b551c7L, 0x849491e8L, 0x4dc75ad6L,
     /* 220*/ 0x697c33beL, 0xbaf0ca33L, 0x46125b4eL, 0x59d677b3L, 0x30d9c8f2L,
     /* 225*/ 0xd0af860cL, 0x1c7fd0faL, 0xfe0ff72cL, 0x5c8d6f43L, 0x57fdec3bL,
     /* 230*/ 0x6ab6ad97L, 0xd22adf89L, 0x18171785L, 0x02bfe22dL, 0x6db80917L,
     /* 235*/ 0x80b216afL, 0xe85e4f9aL, 0x7a1c306eL, 0x6fc49bf5L, 0x3af7a11cL,
     /* 240*/ 0x81e215e7L, 0x68363fcdL, 0x3e9357c8L, 0xef52fd55L, 0x3b8bab4cL,
     /* 245*/ 0x3c8cf495L, 0xbefceebdL, 0xfd25b714L, 0xc498d83dL, 0x0d2e1a8dL,
     /* 250*/ 0xe9f966acL, 0x0e387445L, 0x435419e5L, 0x5e7ebec4L, 0xaa90b8d9L,
     /* 255*/ 0xff1a3a96L
     /* End   of S Box 1  */},

    {/* Start of S Box 2  */

     /*   0*/ 0x4a8fe4e3L, 0xf27d99cdL, 0xd04a40caL, 0xcb5ff194L, 0x3668275aL,
     /*   5*/ 0xff4816beL, 0xa78b394cL, 0x4c6be9dbL, 0x4eec38d2L, 0x4296ec80L,
     /*  10*/ 0xcdce96f8L, 0x888c2f38L, 0xe75508f5L, 0x7b916414L, 0x060aa14aL,
     /*  15*/ 0xa214f327L, 0xbe608dafL, 0x1ebbdec2L, 0x61f98ce9L, 0xe92156feL,
     /*  20*/ 0x4f22d7a3L, 0x3f76a8d9L, 0x559a4b33L, 0x38ad2959L, 0xf3f17e9eL,
     /*  25*/ 0x85e1ba91L, 0xe5eba6fbL, 0x73dcd48cL, 0xf5c3ff78L, 0x481b6058L,
     /*  30*/ 0x8a3297f7L, 0x8f1f3bf4L, 0x93785ab2L, 0x477a4a5bL, 0x6334eb5dL,
     /*  35*/ 0x6d251b2eL, 0x74a9102dL, 0x07e38ffaL, 0x915c9c62L, 0xccc275eaL,
     /*  40*/ 0x6be273ecL, 0x3ebddd70L, 0xd895796cL, 0xdc54a91bL, 0xc9afdf81L,
     /*  45*/ 0x23633f73L, 0x275119b4L, 0xb19f6b67L, 0x50756e22L, 0x2bb152e2L,
     /*  50*/ 0x76ea46a2L, 0xa353e232L, 0x2f596ad6L, 0x0b1edb0bL, 0x02d3d9a4L,
     /*  55*/ 0x78b47843L, 0x64893e90L, 0x40f0caadL, 0xf68d3ad7L, 0x46fd1707L,
     /*  60*/ 0x1c9c67efL, 0xb5e086deL, 0x96ee6ca6L, 0x9aa34774L, 0x1ba4f48aL,
     /*  65*/ 0x8d01abfdL, 0x183ee1f6L, 0x5ff8aa7aL, 0x17e4faaeL, 0x303983b0L,
     /*  70*/ 0x6c08668bL, 0xd4ac4382L, 0xe6c5849fL, 0x92fefb53L, 0xc1cac4ceL,
     /*  75*/ 0x43501388L, 0x441118cfL, 0xec4fb308L, 0x53a08e86L, 0x9e0fe0c5L,
     /*  80*/ 0xf91c1525L, 0xac45be05L, 0xd7987cb5L, 0x49ba1487L, 0x57938940L,
     /*  85*/ 0xd5877648L, 0xa958727fL, 0x58dfe3c3L, 0xf436cf77L, 0x399e4d11L,
     /*  90*/ 0xf0a5bfa9L, 0xef61a33bL, 0xa64cac60L, 0x04a8d0baL, 0x030dd572L,
     /*  95*/ 0xb83d320fL, 0xcab23045L, 0xe366f2f0L, 0x815d008dL, 0xc897a43aL,
     /* 100*/ 0x1d352df3L, 0xb9cc571dL, 0x8bf38744L, 0x72209092L, 0xeba124ebL,
     /* 105*/ 0xfb99ce5eL, 0x3bb94293L, 0x28da549cL, 0xaab8a228L, 0xa4197785L,
     /* 110*/ 0x33c70296L, 0x25f6259bL, 0x5c85da21L, 0xdf15bdeeL, 0x15b7c7e8L,
     /* 115*/ 0xe2abef75L, 0xfcc19bc1L, 0x417ff868L, 0x14884434L, 0x62825179L,
     /* 120*/ 0xc6d5c11cL, 0x0e4705dcL, 0x22700de0L, 0xd3d2af18L, 0x9be822a0L,
     /* 125*/ 0x35b669f1L, 0xc42bb55cL, 0x0a801252L, 0x115bf0fcL, 0x3cd7d856L,
     /* 130*/ 0xb43f5f9dL, 0xc2306516L, 0xa1231c47L, 0xf149207eL, 0x5209a795L,
     /* 135*/ 0x34b3ccd8L, 0x67aefe54L, 0x2c83924eL, 0x6662cbacL, 0x5eedd161L,
     /* 140*/ 0x84e681aaL, 0x5d57d26bL, 0xfa465cc4L, 0x7e3ac3a8L, 0xbf7c0cc6L,
     /* 145*/ 0xe18a9aa1L, 0xc32f0a6fL, 0xb22cc00dL, 0x3d280369L, 0x994e554fL,
     /* 150*/ 0x68f480d3L, 0xadcff5e6L, 0x3a8eb265L, 0x83269831L, 0xbd568a09L,
     /* 155*/ 0x4bc8ae6aL, 0x69f56d2bL, 0x0f17eac8L, 0x772eb6c7L, 0x9f41343cL,
     /* 160*/ 0xab1d0742L, 0x826a6f50L, 0xfea2097cL, 0x1912c283L, 0xce185899L,
     /* 165*/ 0xe4444839L, 0x2d8635d5L, 0x65d0b1ffL, 0x865a7f17L, 0x326d9fb1L,
     /* 170*/ 0x59e52820L, 0x0090ade1L, 0x753c7149L, 0x9ddd8b98L, 0xa5a691daL,
     /* 175*/ 0x0d0382bbL, 0x8904c930L, 0x086cb000L, 0x6e69d3bdL, 0x24d4e7a7L,
     /* 180*/ 0x05244fd0L, 0x101a5e0cL, 0x6a947dcbL, 0xe840f77bL, 0x7d0c5003L,
     /* 185*/ 0x7c370f1fL, 0x805245edL, 0xe05e3d3fL, 0x7906880eL, 0xbabfcd35L,
     /* 190*/ 0x1a7ec697L, 0x8c052324L, 0x0c6ec8dfL, 0xd129a589L, 0xc7a75b02L,
     /* 195*/ 0x12d81de7L, 0xd9be2a66L, 0x1f4263abL, 0xde73fdb6L, 0x2a00680aL,
     /* 200*/ 0x56649e36L, 0x3133ed55L, 0x90fa0bf2L, 0x2910a02aL, 0x949d9d46L,
     /* 205*/ 0xa0d1dcddL, 0xcfc9b7d4L, 0xd2677be5L, 0x95cb36b3L, 0x13cd9410L,
     /* 210*/ 0xdbf73313L, 0xb7c6e8c0L, 0xf781414bL, 0x510b016dL, 0xb0de1157L,
     /* 215*/ 0xd6b0f62cL, 0xbb074eccL, 0x7f1395b7L, 0xee792cf9L, 0xea6fd63eL,
     /* 220*/ 0x5bd6938eL, 0xaf02fc64L, 0xdab57ab8L, 0x8edb3784L, 0x8716318fL,
     /* 225*/ 0x164d1a01L, 0x26f26141L, 0xb372e6b9L, 0xf8fc2b06L, 0x7ac00e04L,
     /* 230*/ 0x3727b89aL, 0x97e9bca5L, 0x9c2a742fL, 0xbc3b1f7dL, 0x7165b471L,
     /* 235*/ 0x609b4c29L, 0x20925351L, 0x5ae72112L, 0x454be5d1L, 0xc0ffb95fL,
     /* 240*/ 0xdd0ef919L, 0x6f2d70c9L, 0x0974c5bfL, 0x98aa6263L, 0x01d91e4dL,
     /* 245*/ 0x2184bb6eL, 0x70c43c1eL, 0x4d435915L, 0xae7b8523L, 0xb6fb06bcL,
     /* 250*/ 0x5431ee76L, 0xfdbc5d26L, 0xed77493dL, 0xc5712ee4L, 0xa8380437L,
     /* 255*/ 0x2eef261aL
     /* End   of S Box 2  */},

    {/* Start of S Box 3  */

     /*   0*/ 0x5a79392bL, 0xb8af32c2L, 0x41f7720aL, 0x833a61ecL, 0x13dfedacL,
     /*   5*/ 0xc4990bc4L, 0xdc0f54bcL, 0xfedd5e88L, 0x80da1881L, 0x4dea1afdL,
     /*  10*/ 0xfd402cc6L, 0xae67cc7aL, 0xc5238525L, 0x8ea01254L, 0xb56b9bd5L,
     /*  15*/ 0x862fbd6dL, 0xac8575d3L, 0x6fba3714L, 0xda7ebf46L, 0x59cd5238L,
     /*  20*/ 0x8ac9dbfeL, 0x353729fcL, 0xe497d7f2L, 0xc3ab84e0L, 0xf05a114bL,
     /*  25*/ 0x7b887a75L, 0xedc603ddL, 0x5e6fe680L, 0x2c84b399L, 0x884eb1daL,
     /*  30*/ 0x1cb8c8bfL, 0xaa51098aL, 0xc862231cL, 0x8bac2221L, 0x21b387e5L,
     /*  35*/ 0x208a430dL, 0x2a3f0f8bL, 0xa5ff9cd2L, 0x6012a2eaL, 0x147a9ee7L,
     /*  40*/ 0xf62a501dL, 0xb4b2e51aL, 0x3ef3484cL, 0xc0253c59L, 0x2b82b536L,
     /*  45*/ 0x0aa9696bL, 0xbe0c109bL, 0xc70b7929L, 0xce3e8a19L, 0x2f66950eL,
     /*  50*/ 0x459f1c2cL, 0xe68fb93dL, 0xa3c3ff3eL, 0x62b45c62L, 0x300991cbL,
     /*  55*/ 0x01914c57L, 0x7f7bc06aL, 0x182831f5L, 0xe7b74bcaL, 0xfa50f6d0L,
     /*  60*/ 0x523caa61L, 0xe3a7cf05L, 0xe9e41311L, 0x280a21d1L, 0x6a4297e1L,
     /*  65*/ 0xf24dc67eL, 0xfc3189e6L, 0xb72bf34fL, 0x4b1e67afL, 0x543402ceL,
     /*  70*/ 0x79a59867L, 0x0648e02aL, 0x00a3ac17L, 0xc6208d35L, 0x6e7f5f76L,
     /*  75*/ 0xa45bb4beL, 0xf168fa63L, 0x3f4125f3L, 0xf311406fL, 0x02706565L,
     /*  80*/ 0xbfe58022L, 0x0cfcfdd9L, 0x0735a7f7L, 0x8f049092L, 0xd98edc27L,
     /*  85*/ 0xf5c5d55cL, 0xe0f201dbL, 0x0dcafc9aL, 0x7727fb79L, 0xaf43abf4L,
     /*  90*/ 0x26e938c1L, 0x401b26a6L, 0x900720faL, 0x2752d97bL, 0xcff1d1b3L,
     /*  95*/ 0xa9d9e424L, 0x42db99abL, 0x6cf8be5fL, 0xe82cebe3L, 0x3afb733bL,
     /* 100*/ 0x6b734eb6L, 0x1036414aL, 0x975f667cL, 0x049d6377L, 0xba587c60L,
     /* 105*/ 0xb1d10483L, 0xde1aefccL, 0x1129d055L, 0x72051e91L, 0x6946d623L,
     /* 110*/ 0xf9e86ea7L, 0x48768c00L, 0xb0166c93L, 0x9956bbf0L, 0x1f1f6d84L,
     /* 115*/ 0xfb15e18eL, 0x033b495dL, 0x56e3362eL, 0x4f44c53cL, 0x747cba51L,
     /* 120*/ 0x89d37872L, 0x5d9c331bL, 0xd2ef9fa8L, 0x254917f8L, 0x1b106f47L,
     /* 125*/ 0x37d75553L, 0xb3f053b0L, 0x7dccd8efL, 0xd30eb802L, 0x5889f42dL,
     /* 130*/ 0x610206d7L, 0x1a7d34a1L, 0x92d87dd8L, 0xe5f4a315L, 0xd1cf0e71L,
     /* 135*/ 0xb22dfe45L, 0xb901e8ebL, 0x0fc0ce5eL, 0x2efa60c9L, 0x2de74290L,
     /* 140*/ 0x36d0c906L, 0x381c70e4L, 0x4c6da5b5L, 0x3d81a682L, 0x7e381f34L,
     /* 145*/ 0x396c4f52L, 0x95ad5901L, 0x1db50c5aL, 0x29982e9eL, 0x1557689fL,
     /* 150*/ 0x3471ee42L, 0xd7e2f7c0L, 0x8795a1e2L, 0xbc324d8dL, 0xe224c3c8L,
     /* 155*/ 0x12837e39L, 0xcdee3d74L, 0x7ad2143fL, 0x0e13d40cL, 0x78bd4a68L,
     /* 160*/ 0xa2eb194dL, 0xdb9451f9L, 0x859b71dcL, 0x5c4f5b89L, 0xca14a8a4L,
     /* 165*/ 0xef92f003L, 0x16741d98L, 0x33aa4444L, 0x9e967fbbL, 0x092e3020L,
     /* 170*/ 0xd86a35b8L, 0x8cc17b10L, 0xe1bf08aeL, 0x55693fc5L, 0x7680ad13L,
     /* 175*/ 0x1e6546e8L, 0x23b6e7b9L, 0xee77a4b2L, 0x08ed0533L, 0x44fd2895L,
     /* 180*/ 0xb6393b69L, 0x05d6cacfL, 0x9819b209L, 0xecbbb72fL, 0x9a75779cL,
     /* 185*/ 0xeaec0749L, 0x94a65aeeL, 0xbdf52dc3L, 0xd6a25d04L, 0x82008e4eL,
     /* 190*/ 0xa6de160fL, 0x9b036afbL, 0x228b3a66L, 0x5fb10a70L, 0xcc338b58L,
     /* 195*/ 0x5378a9dfL, 0xc908bca9L, 0x4959e25bL, 0x46909a97L, 0x66ae8f6eL,
     /* 200*/ 0xdd0683e9L, 0x65f994b4L, 0x6426cda5L, 0xc24b8840L, 0x32539da0L,
     /* 205*/ 0x63175650L, 0xd0c815ffL, 0x50cbc41eL, 0xf7c774a3L, 0x31b0c231L,
     /* 210*/ 0x8d0d8116L, 0x24bef16cL, 0xd555d256L, 0xdf47ea8cL, 0x6d21eccdL,
     /* 215*/ 0xa887a012L, 0x84542aedL, 0xa7b9c1bdL, 0x914c1bb1L, 0xa0d5b67dL,
     /* 220*/ 0x438ce937L, 0x7030f873L, 0x71f6b0c7L, 0x574576baL, 0xf8bc4541L,
     /* 225*/ 0x9c61d348L, 0x1960579dL, 0x17c4daadL, 0x96a4cb0bL, 0xc193f2f6L,
     /* 230*/ 0x756eafa2L, 0x7c1d2f94L, 0xf4fe2b43L, 0xcb86e33aL, 0xebd4c728L,
     /* 235*/ 0x9d18ae64L, 0x9fe13e30L, 0x3ce0f5deL, 0xaba1f985L, 0xaddc2718L,
     /* 240*/ 0x68ce6278L, 0xd45e241fL, 0xa15c82b7L, 0x3b2293d4L, 0x739edd32L,
     /* 245*/ 0x674a6bf1L, 0x5b5d587fL, 0x4772deaaL, 0x4a63968fL, 0x0be68686L,
     /* 250*/ 0x513d6426L, 0x939a4787L, 0xbba89296L, 0x4ec20007L, 0x818d0d08L,
     /* 255*/ 0xff64dfd6L
     /* End   of S Box 3  */},

    {/* Start of S Box 4  */

     /*   0*/ 0xcb2297cbL, 0xdb48a144L, 0xa16cbe4bL, 0xbbea1d6cL, 0x5af6b6b7L,
     /*   5*/ 0x8a8110b6L, 0xf9236ef9L, 0xc98f83e6L, 0x0f9c65b8L, 0x252d4a89L,
     /*  10*/ 0xa497f068L, 0xa5d7ed2dL, 0x94c22845L, 0x9da1c8c4L, 0xe27c2e2eL,
     /*  15*/ 0x6e8ba2b4L, 0xc3dd17fbL, 0x498cd482L, 0x0dfe6a9fL, 0xb0705829L,
     /*  20*/ 0x9a1e6dc1L, 0xf829717cL, 0x07bb8e3aL, 0xda3c0b02L, 0x1af82fc7L,
     /*  25*/ 0x73b70955L, 0x7a04379cL, 0x5ee20a28L, 0x83712ae5L, 0xf4c47c6dL,
     /*  30*/ 0xdf72ba56L, 0xd794858dL, 0x8c0cf709L, 0x18f0f390L, 0xb6c69b35L,
     /*  35*/ 0xbf2f01dbL, 0x2fa74dcaL, 0xd0cd9127L, 0xbde66cecL, 0x3deebd46L,
     /*  40*/ 0x57c88fc3L, 0xcee1406fL, 0x0066385aL, 0xf3c3444fL, 0x3a79d5d5L,
     /*  45*/ 0x75751eb9L, 0x3e7f8185L, 0x521c2605L, 0xe1aaab6eL, 0x38ebb80fL,
     /*  50*/ 0xbee7e904L, 0x61cb9647L, 0xea54904eL, 0x05ae00e4L, 0x2d7ac65fL,
     /*  55*/ 0x087751a1L, 0xdcd82915L, 0x0921ee16L, 0xdd86d33bL, 0xd6bd491aL,
     /*  60*/ 0x40fbadf0L, 0x4232cbd2L, 0x33808d10L, 0x39098c42L, 0x193f3199L,
     /*  65*/ 0x0bc1e47aL, 0x4a82b149L, 0x02b65a8aL, 0x104cdc8eL, 0x24a8f52cL,
     /*  70*/ 0x685c6077L, 0xc79f95c9L, 0x1d11fe50L, 0xc08dafcdL, 0x7b1a9a03L,
     /*  75*/ 0x1c1f11d8L, 0x84250e7fL, 0x979db248L, 0xebdc0501L, 0xb9553395L,
     /*  80*/ 0xe3c05ea8L, 0xb1e51c4cL, 0x13b0e681L, 0x3b407766L, 0x36db3087L,
     /*  85*/ 0xee17c9fcL, 0x6c53ecf2L, 0xadccc58fL, 0xc427660bL, 0xefd5867dL,
     /*  90*/ 0x9b6d54a5L, 0x6ff1aeffL, 0x8e787952L, 0x9e2bffe0L, 0x8761d034L,
     /*  95*/ 0xe00bdbadL, 0xae99a8d3L, 0xcc03f6e2L, 0xfd0ed807L, 0x0e508ae3L,
     /* 100*/ 0xb74182abL, 0x4349245dL, 0xd120a465L, 0xb246a641L, 0xaf3b7ab0L,
     /* 105*/ 0x2a6488bbL, 0x4b3a0d1fL, 0xe7c7e58cL, 0x3faff2ebL, 0x90445ffdL,
     /* 110*/ 0xcf38c393L, 0x995d07e7L, 0xf24f1b36L, 0x356f6891L, 0x6d6ebcbeL,
     /* 115*/ 0x8da9e262L, 0x50fd520eL, 0x5bca9e1eL, 0x37472cf3L, 0x69075057L,
     /* 120*/ 0x7ec5fdedL, 0x0cab892aL, 0xfb2412baL, 0x1728debfL, 0xa000a988L,
     /* 125*/ 0xd843ce79L, 0x042e20ddL, 0x4fe8f853L, 0x56659c3cL, 0x2739d119L,
     /* 130*/ 0xa78a6120L, 0x80960375L, 0x70420611L, 0x85e09f78L, 0xabd17e96L,
     /* 135*/ 0x1b513eafL, 0x1e01eb63L, 0x26ad2133L, 0xa890c094L, 0x7613cf60L,
     /* 140*/ 0x817e781bL, 0xa39113d7L, 0xe957fa58L, 0x4131b99eL, 0x28b1efdaL,
     /* 145*/ 0x66acfba7L, 0xff68944aL, 0x77a44fd1L, 0x7f331522L, 0x59ffb3faL,
     /* 150*/ 0xa6df935bL, 0xfa12d9dfL, 0xc6bf6f3fL, 0x89520cf6L, 0x659edd6aL,
     /* 155*/ 0x544da739L, 0x8b052538L, 0x7c30ea21L, 0xc2345525L, 0x15927fb2L,
     /* 160*/ 0x144a436bL, 0xba107b8bL, 0x1219ac97L, 0x06730432L, 0x31831ab3L,
     /* 165*/ 0xc55a5c24L, 0xaa0fcd3eL, 0xe5606be8L, 0x5c88f19bL, 0x4c0841eeL,
     /* 170*/ 0x1fe37267L, 0x11f9c4f4L, 0x9f1b9daeL, 0x864e76d0L, 0xe637c731L,
     /* 175*/ 0xd97d23a6L, 0x32f53d5cL, 0xb8161980L, 0x93fa0f84L, 0xcaef0870L,
     /* 180*/ 0x8874487eL, 0x98f2cc73L, 0x645fb5c6L, 0xcd853659L, 0x2062470dL,
     /* 185*/ 0x16ede8e9L, 0x6b06dab5L, 0x78b43900L, 0xfc95b786L, 0x5d8e7de1L,
     /* 190*/ 0x465b5954L, 0xfe7ba014L, 0xf7d23f7bL, 0x92bc8b18L, 0x03593592L,
     /* 195*/ 0x55cef4f7L, 0x74b27317L, 0x79de1fc2L, 0xc8a0bfbdL, 0x229398ccL,
     /* 200*/ 0x62a602ceL, 0xbcb94661L, 0x5336d206L, 0xd2a375feL, 0x6a6ab483L,
     /* 205*/ 0x4702a5a4L, 0xa2e9d73dL, 0x23a2e0f1L, 0x9189140aL, 0x581d18dcL,
     /* 210*/ 0xb39a922bL, 0x82356212L, 0xd5f432a9L, 0xd356c2a3L, 0x5f765b4dL,
     /* 215*/ 0x450afcc8L, 0x4415e137L, 0xe8ecdfbcL, 0xed0de3eaL, 0x60d42b13L,
     /* 220*/ 0xf13df971L, 0x71fc5da2L, 0xc1455340L, 0xf087742fL, 0xf55e5751L,
     /* 225*/ 0x67b3c1f8L, 0xac6b8774L, 0x7dcfaaacL, 0x95983bc0L, 0x489bb0b1L,
     /* 230*/ 0x2c184223L, 0x964b6726L, 0x2bd3271cL, 0x72266472L, 0xded64530L,
     /* 235*/ 0x0a2aa343L, 0xd4f716a0L, 0xb4dad6d9L, 0x2184345eL, 0x512c990cL,
     /* 240*/ 0x29d92d08L, 0x2ebe709aL, 0x01144c69L, 0x34584b9dL, 0xe4634ed6L,
     /* 245*/ 0xecc963cfL, 0x3c6984aaL, 0x4ed056efL, 0x9ca56976L, 0x8f3e80d4L,
     /* 250*/ 0xb5bae7c5L, 0x30b5caf5L, 0x63f33a64L, 0xa9e4bbdeL, 0xf6b82298L,
     /* 255*/ 0x4d673c1dL
     /* End   of S Box 4  */},

    {/* Start of S Box 5  */

     /*   0*/ 0x4b4f1121L, 0xba183081L, 0xc784f41fL, 0xd17d0bacL, 0x083d2267L,
     /*   5*/ 0x37b1361eL, 0x3581ad05L, 0xfda2f6bcL, 0x1e892cddL, 0xb56d3c3aL,
     /*  10*/ 0x32140e46L, 0x138d8aabL, 0xe14773d4L, 0x5b0e71dfL, 0x5d1fe055L,
     /*  15*/ 0x3fb991d3L, 0xf1f46c71L, 0xa325988cL, 0x10f66e80L, 0xb1006348L,
     /*  20*/ 0x726a9f60L, 0x3b67f8baL, 0x4e114ef4L, 0x05c52115L, 0x4c5ca11cL,
     /*  25*/ 0x99e1efd8L, 0x471b83b3L, 0xcbf7e524L, 0x43ad82f5L, 0x690ca93bL,
     /*  30*/ 0xfaa61bb2L, 0x12a832b5L, 0xb734f943L, 0xbd22aea7L, 0x88fec626L,
     /*  35*/ 0x5e80c3e7L, 0xbe3eaf5eL, 0x44617652L, 0xa5724475L, 0xbb3b9695L,
     /*  40*/ 0x7f3fee8fL, 0x964e7debL, 0x518c052dL, 0x2a0bbc2bL, 0xc2175f5cL,
     /*  45*/ 0x9a7b3889L, 0xa70d8d0cL, 0xeaccdd29L, 0xcccd6658L, 0x34bb25e6L,
     /*  50*/ 0xb8391090L, 0xf651356fL, 0x52987c9eL, 0x0c16c1cdL, 0x8e372d3cL,
     /*  55*/ 0x2fc6ebbdL, 0x6e5da3e3L, 0xb0e27239L, 0x5f685738L, 0x45411786L,
     /*  60*/ 0x067f65f8L, 0x61778b40L, 0x81ab2e65L, 0x14c8f0f9L, 0xa6b7b4ceL,
     /*  65*/ 0x4036eaecL, 0xbf62b00aL, 0xecfd5e02L, 0x045449a6L, 0xb20afd28L,
     /*  70*/ 0x2166d273L, 0x0d13a863L, 0x89508756L, 0xd51a7530L, 0x2d653f7aL,
     /*  75*/ 0x3cdbdbc3L, 0x80c9df4fL, 0x3d5812d9L, 0x53fbb1f3L, 0xc0f185c0L,
     /*  80*/ 0x7a3c3d7eL, 0x68646410L, 0x857607a0L, 0x1d12622eL, 0x97f33466L,
     /*  85*/ 0xdb4c9917L, 0x6469607cL, 0x566e043dL, 0x79ef1edbL, 0x2c05898dL,
     /*  90*/ 0xc9578e25L, 0xcd380101L, 0x46e04377L, 0x7d1cc7a9L, 0x6552b837L,
     /*  95*/ 0x20192608L, 0xb97500c5L, 0xed296b44L, 0x368648b4L, 0x62995cd5L,
     /* 100*/ 0x82731400L, 0xf9aebd8bL, 0x3844c0c7L, 0x7c2de794L, 0x33a1a770L,
     /* 105*/ 0x8ae528c2L, 0x5a2be812L, 0x1f8f4a07L, 0x2b5ed7caL, 0x937eb564L,
     /* 110*/ 0x6fda7e11L, 0xe49b5d6cL, 0xb4b3244eL, 0x18aa53a4L, 0x3a061334L,
     /* 115*/ 0x4d6067a3L, 0x83ba5868L, 0x9bdf4dfeL, 0x7449f261L, 0x709f8450L,
     /* 120*/ 0xcad133cbL, 0xde941c3fL, 0xf52ae484L, 0x781d77edL, 0x7e4395f0L,
     /* 125*/ 0xae103b59L, 0x922331bbL, 0x42ce50c8L, 0xe6f08153L, 0xe7d941d0L,
     /* 130*/ 0x5028ed6bL, 0xb3d2c49bL, 0xad4d9c3eL, 0xd201fb6eL, 0xa45bd5beL,
     /* 135*/ 0xffcb7f4bL, 0x579d7806L, 0xf821bb5bL, 0x59d592adL, 0xd0be0c31L,
     /* 140*/ 0xd4e3b676L, 0x0107165aL, 0x0fe939d2L, 0x49bcaafdL, 0x55ffcfe5L,
     /* 145*/ 0x2ec1f783L, 0xf39a09a5L, 0x3eb42772L, 0x19b55a5dL, 0x024a0679L,
     /* 150*/ 0x8c83b3f7L, 0x8642ba1dL, 0xacacd9eaL, 0x87d352c4L, 0x60931f45L,
     /* 155*/ 0xa05f97d7L, 0x1cecd42cL, 0xe2fcc87bL, 0xb60f94e2L, 0x67a34b0bL,
     /* 160*/ 0xfcdd40c9L, 0x0b150a27L, 0xd3ee9e04L, 0x582e29e9L, 0x4ac22b41L,
     /* 165*/ 0x6ac4e1b8L, 0xbccaa51aL, 0x237af30eL, 0xebc3b709L, 0xc4a59d19L,
     /* 170*/ 0x284bc98aL, 0xe9d41a93L, 0x6bfa2018L, 0x73b2d651L, 0x11f9a2faL,
     /* 175*/ 0xce09bff1L, 0x41a470aaL, 0x25888f22L, 0x77e754e8L, 0xf7330d8eL,
     /* 180*/ 0x158eab16L, 0xc5d68842L, 0xc685a6f6L, 0xe5b82fdeL, 0x09ea3a96L,
     /* 185*/ 0x6dde1536L, 0x4fa919daL, 0x26c0be9fL, 0x9eed6f69L, 0xf05555f2L,
     /* 190*/ 0xe06fc285L, 0x9cd76d23L, 0xaf452a92L, 0xefc74cb7L, 0x9d6b4732L,
     /* 195*/ 0x8be408eeL, 0x22401d0dL, 0xee6c459dL, 0x7587cb82L, 0xe8746862L,
     /* 200*/ 0x5cbdde87L, 0x98794278L, 0x31afb94dL, 0xc11e0f2fL, 0x30e8fc2aL,
     /* 205*/ 0xcf3261efL, 0x1a3023e1L, 0xaa2f86cfL, 0xf202e24aL, 0x8d08dcffL,
     /* 210*/ 0x764837c6L, 0xa26374ccL, 0x9f7c3e88L, 0x949cc57dL, 0xdd26a07fL,
     /* 215*/ 0xc39efab0L, 0xc8f879a1L, 0xdce67bb9L, 0xf4b0a435L, 0x912c9ae0L,
     /* 220*/ 0xd85603e4L, 0x953a9bbfL, 0xfb8290d6L, 0x0aebcd5fL, 0x16206a9aL,
     /* 225*/ 0x6c787a14L, 0xd9a0f16aL, 0x29bf4f74L, 0x8f8bce91L, 0x0e5a9354L,
     /* 230*/ 0xab038cb1L, 0x1b8ad11bL, 0xe327ff49L, 0x0053da20L, 0x90cf51dcL,
     /* 235*/ 0xda92fe6dL, 0x0390ca47L, 0xa8958097L, 0xa9dc5bafL, 0x3931e3c1L,
     /* 240*/ 0x840446b6L, 0x63d069fbL, 0xd7460299L, 0x7124ecd1L, 0x0791e613L,
     /* 245*/ 0x485918fcL, 0xd635d04cL, 0xdf96ac33L, 0x66f2d303L, 0x247056aeL,
     /* 250*/ 0xa1a7b2a8L, 0x27d8cc9cL, 0x17b6e998L, 0x7bf5590fL, 0xfe97f557L,
     /* 255*/ 0x5471d8a2L
     /* End   of S Box 5  */},

    {/* Start of S Box 6  */

     /*   0*/ 0x83a327a1L, 0x9f379f51L, 0x40a7d007L, 0x11307423L, 0x224587c1L,
     /*   5*/ 0xac27d63bL, 0x3b7e64eaL, 0x2e1cbfa6L, 0x09996000L, 0x03bc0e2cL,
     /*  10*/ 0xd4c4478aL, 0x4542e0abL, 0xfeda26d4L, 0xc1d10fcbL, 0x8252f596L,
     /*  15*/ 0x4494eb5cL, 0xa362f314L, 0xf5ba81fdL, 0x75c3a376L, 0x4ca214caL,
     /*  20*/ 0xe164deddL, 0x5088fa97L, 0x4b0930e0L, 0x2fcfb7e8L, 0x33a6f4b2L,
     /*  25*/ 0xc7e94211L, 0x2d66c774L, 0x43be8baeL, 0xc663d445L, 0x908eb130L,
     /*  30*/ 0xf4e3be15L, 0x63b9d566L, 0x529396b5L, 0x1e1be743L, 0x4d5ff63fL,
     /*  35*/ 0x985e4a83L, 0x71ab9df7L, 0xc516c6f5L, 0x85c19ab4L, 0x1f4daee4L,
     /*  40*/ 0xf2973431L, 0xb713dc5eL, 0x3f2e159aL, 0xc824da16L, 0x06bf376aL,
     /*  45*/ 0xb2fe23ecL, 0xe39b1c22L, 0xf1eecb5fL, 0x08e82d52L, 0x565686c2L,
     /*  50*/ 0xab0aea93L, 0xfd47219fL, 0xebdbabd7L, 0x2404a185L, 0x8c7312b9L,
     /*  55*/ 0xa8f2d828L, 0x0c8902daL, 0x65b42b63L, 0xc0bbef62L, 0x4e3e4cefL,
     /*  60*/ 0x788f8018L, 0xee1ebab7L, 0x93928f9dL, 0x683d2903L, 0xd3b60689L,
     /*  65*/ 0xafcb0ddcL, 0x88a4c47aL, 0xf6dd9c3dL, 0x7ea5fca0L, 0x8a6d7244L,
     /*  70*/ 0xbe11f120L, 0x04ff91b8L, 0x8d2dc8c0L, 0x27f97fdbL, 0x7f9e1f47L,
     /*  75*/ 0x1734f0c7L, 0x26f3ed8eL, 0x0df8f2bfL, 0xb0833d9eL, 0xe420a4e5L,
     /*  80*/ 0xa423cae6L, 0x95616772L, 0x9ae6c049L, 0x075941f2L, 0xd8e12812L,
     /*  85*/ 0x000f6f4fL, 0x3c0d6b05L, 0x6cef921cL, 0xb82bc264L, 0x396cb008L,
     /*  90*/ 0x5d608a6fL, 0x6d7782c8L, 0x186550aaL, 0x6b6fec09L, 0x28e70b13L,
     /*  95*/ 0x57ce5688L, 0xecd3af84L, 0x23335a95L, 0x91f40cd2L, 0x7b6a3b26L,
     /* 100*/ 0xbd32b3b6L, 0x3754a6fbL, 0x8ed088f0L, 0xf867e87cL, 0x20851746L,
     /* 105*/ 0x6410f9c6L, 0x35380442L, 0xc2ca10a7L, 0x1adea27fL, 0x76bddd79L,
     /* 110*/ 0x92742cf4L, 0x0e98f7eeL, 0x164e931dL, 0xb9c835b3L, 0x69060a99L,
     /* 115*/ 0xb44c531eL, 0xfa7b66feL, 0xc98a5b53L, 0x7d95aae9L, 0x302f467bL,
     /* 120*/ 0x74b811deL, 0xf3866abdL, 0xb5b3d32dL, 0xfc3157a4L, 0xd251fe19L,
     /* 125*/ 0x0b5d8eacL, 0xda71ffd5L, 0x47ea05a3L, 0x05c6a9e1L, 0xca0ee958L,
     /* 130*/ 0x9939034dL, 0x25dc5edfL, 0x79083cb1L, 0x86768450L, 0xcf757d6dL,
     /* 135*/ 0x5972b6bcL, 0xa78d59c9L, 0xc4ad8d41L, 0x2a362ad3L, 0xd1179991L,
     /* 140*/ 0x601407ffL, 0xdcf50917L, 0x587069d0L, 0xe0821ed6L, 0xdbb59427L,
     /* 145*/ 0x73911a4bL, 0x7c904fc3L, 0x844afb92L, 0x6f8c955dL, 0xe8c0c5bbL,
     /* 150*/ 0xb67ab987L, 0xa529d96cL, 0xf91f7181L, 0x618b1b06L, 0xe718bb0cL,
     /* 155*/ 0x8bd7615bL, 0xd5a93a59L, 0x54aef81bL, 0x772136e3L, 0xce44fd9cL,
     /* 160*/ 0x10cda57eL, 0x87d66e0bL, 0x3d798967L, 0x1b2c1804L, 0x3edfbd68L,
     /* 165*/ 0x15f6e62bL, 0xef68b854L, 0x3896db35L, 0x12b7b5e2L, 0xcb489029L,
     /* 170*/ 0x9e4f98a5L, 0x62eb77a8L, 0x217c24a2L, 0x964152f6L, 0x49b2080aL,
     /* 175*/ 0x53d23ee7L, 0x48fb6d69L, 0x1903d190L, 0x9449e494L, 0xbf6e7886L,
     /* 180*/ 0xfb356cfaL, 0x3a261365L, 0x424bc1ebL, 0xa1192570L, 0x019ca782L,
     /* 185*/ 0x9d3f7e0eL, 0x9c127575L, 0xedf02039L, 0xad57bcceL, 0x5c153277L,
     /* 190*/ 0x81a84540L, 0xbcaa7356L, 0xccd59b60L, 0xa62a629bL, 0xa25ccd10L,
     /* 195*/ 0x2b5b65cfL, 0x1c535832L, 0x55fd4e3aL, 0x31d9790dL, 0xf06bc37dL,
     /* 200*/ 0x4afc1d71L, 0xaeed5533L, 0xba461634L, 0xbb694b78L, 0x5f3a5c73L,
     /* 205*/ 0x6a3c764aL, 0x8fb0cca9L, 0xf725684cL, 0x4fe5382fL, 0x1d0163afL,
     /* 210*/ 0x5aa07a8fL, 0xe205a8edL, 0xc30bad38L, 0xff22cf1fL, 0x72432e2eL,
     /* 215*/ 0x32c2518bL, 0x3487ce4eL, 0x7ae0ac02L, 0x709fa098L, 0x0a3b395aL,
     /* 220*/ 0x5b4043f8L, 0xa9e48c36L, 0x149a8521L, 0xd07dee6bL, 0x46acd2f3L,
     /* 225*/ 0x8958dffcL, 0xb3a1223cL, 0xb11d31c4L, 0xcd7f4d3eL, 0x0f28e3adL,
     /* 230*/ 0xe5b100beL, 0xaac54824L, 0xe9c9d7baL, 0x9bd47001L, 0x80f149b0L,
     /* 235*/ 0x66022f0fL, 0x020c4048L, 0x6efa192aL, 0x67073f8dL, 0x13ec7bf9L,
     /* 240*/ 0x3655011aL, 0xe6afe157L, 0xd9845f6eL, 0xdecc4425L, 0x511ae2ccL,
     /* 245*/ 0xdf81b4d8L, 0xd7809e55L, 0xd6d883d9L, 0x2cc7978cL, 0x5e787cc5L,
     /* 250*/ 0xdd0033d1L, 0xa050c937L, 0x97f75dcdL, 0x299de580L, 0x41e2b261L,
     /* 255*/ 0xea5a54f1L
     /* End   of S Box 6  */},

    {/* Start of S Box 7  */

     /*   0*/ 0x7e672590L, 0xbea513bbL, 0x2c906fe6L, 0x86029c2bL, 0x55dc4f74L,
     /*   5*/ 0x0553398eL, 0x63e09647L, 0xcafd0babL, 0x264c37dfL, 0x8272210fL,
     /*  10*/ 0x67afa669L, 0x12d98a5fL, 0x8cab23c4L, 0x75c68bd1L, 0xc3370470L,
     /*  15*/ 0x33f37f4eL, 0x283992ffL, 0xe73a3a67L, 0x1032f283L, 0xf5ad9fc2L,
     /*  20*/ 0x963f0c5dL, 0x664fbc45L, 0x202ba41cL, 0xc7c02d80L, 0x54731e84L,
     /*  25*/ 0x8a1085f5L, 0x601d80fbL, 0x2f968e55L, 0x35e96812L, 0xe45a8f78L,
     /*  30*/ 0xbd7de662L, 0x3b6e6eadL, 0x8097c5efL, 0x070b6781L, 0xb1e508f3L,
     /*  35*/ 0x24e4fae3L, 0xb81a7805L, 0xec0fc918L, 0x43c8774bL, 0x9b2512a9L,
     /*  40*/ 0x2b05ad04L, 0x32c2536fL, 0xedf236e0L, 0x8bc4b0cfL, 0xbaceb837L,
     /*  45*/ 0x4535b289L, 0x0d0e94c3L, 0xa5a371d0L, 0xad695a58L, 0x39e3437dL,
     /*  50*/ 0x9186bffcL, 0x21038c3bL, 0x0aa9dff9L, 0x5d1f06ceL, 0x62def8a4L,
     /*  55*/ 0xf740a2b4L, 0xa2575868L, 0x682683c1L, 0xdbb30facL, 0x61fe1928L,
     /*  60*/ 0x468a6511L, 0xc61cd5f4L, 0xe54d9800L, 0x6b98d7f7L, 0x8418b6a5L,
     /*  65*/ 0x5f09a5d2L, 0x90b4e80bL, 0x49b2c852L, 0x69f11c77L, 0x17412b7eL,
     /*  70*/ 0x7f6fc0edL, 0x56838dccL, 0x6e9546a2L, 0xd0758619L, 0x087b9b9aL,
     /*  75*/ 0xd231a01dL, 0xaf46d415L, 0x097060fdL, 0xd920f657L, 0x882d3f9fL,
     /*  80*/ 0x3ae7c3c9L, 0xe8a00d9bL, 0x4fe67ebeL, 0x2ef80eb2L, 0xc1916b0cL,
     /*  85*/ 0xf4dffea0L, 0xb97eb3ebL, 0xfdff84ddL, 0xff8b14f1L, 0xe96b0572L,
     /*  90*/ 0xf64b508cL, 0xae220a6eL, 0x4423ae5aL, 0xc2bece5eL, 0xde27567cL,
     /*  95*/ 0xfc935c63L, 0x47075573L, 0xe65b27f0L, 0xe121fd22L, 0xf2668753L,
     /* 100*/ 0x2debf5d7L, 0x8347e08dL, 0xac5eda03L, 0x2a7cebe9L, 0x3fe8d92eL,
     /* 105*/ 0x23542fe4L, 0x1fa7bd50L, 0xcf9b4102L, 0x9d0dba39L, 0x9cb8902aL,
     /* 110*/ 0xa7249d8bL, 0x0f6d667aL, 0x5ebfa9ecL, 0x6a594df2L, 0x79600938L,
     /* 115*/ 0x023b7591L, 0xea2c79c8L, 0xc99d07eaL, 0x64cb5ee1L, 0x1a9cab3dL,
     /* 120*/ 0x76db9527L, 0xc08e012fL, 0x3dfb481aL, 0x872f22e7L, 0x2948d15cL,
     /* 125*/ 0xa4782c79L, 0x6f50d232L, 0x78f0728aL, 0x5a87aab1L, 0xc4e2c19cL,
     /* 130*/ 0xee767387L, 0x1b2a1864L, 0x7b8d10d3L, 0xd1713161L, 0x0eeac456L,
     /* 135*/ 0xd8799e06L, 0xb645b548L, 0x4043cb65L, 0xa874fb29L, 0x4b12d030L,
     /* 140*/ 0x7d687413L, 0x18ef9a1fL, 0xd7631d4cL, 0x5829c7daL, 0xcdfa30faL,
     /* 145*/ 0xc5084bb0L, 0x92cd20e2L, 0xd4c16940L, 0x03283ec0L, 0xa917813fL,
     /* 150*/ 0x9a587d01L, 0x70041f8fL, 0xdc6ab1dcL, 0xddaee3d5L, 0x31829742L,
     /* 155*/ 0x198c022dL, 0x1c9eafcbL, 0x5bbc6c49L, 0xd3d3293aL, 0x16d50007L,
     /* 160*/ 0x04bb8820L, 0x3c5c2a41L, 0x37ee7af8L, 0x8eb04025L, 0x9313ecbaL,
     /* 165*/ 0xbffc4799L, 0x8955a744L, 0xef85d633L, 0x504499a7L, 0xa6ca6a86L,
     /* 170*/ 0xbb3d3297L, 0xb34a8236L, 0x6dccbe4fL, 0x06143394L, 0xce19fc7bL,
     /* 175*/ 0xccc3c6c6L, 0xe36254aeL, 0x77b7eda1L, 0xa133dd9eL, 0xebf9356aL,
     /* 180*/ 0x513ccf88L, 0xe2a1b417L, 0x972ee5bdL, 0x853824cdL, 0x5752f4eeL,
     /* 185*/ 0x6c1142e8L, 0x3ea4f309L, 0xb2b5934aL, 0xdfd628aaL, 0x59acea3eL,
     /* 190*/ 0xa01eb92cL, 0x389964bcL, 0xda305dd4L, 0x019a59b7L, 0x11d2ca93L,
     /* 195*/ 0xfaa6d3b9L, 0x4e772ecaL, 0x72651776L, 0xfb4e5b0eL, 0xa38f91a8L,
     /* 200*/ 0x1d0663b5L, 0x30f4f192L, 0xb50051b6L, 0xb716ccb3L, 0x4abd1b59L,
     /* 205*/ 0x146c5f26L, 0xf134e2deL, 0x00f67c6cL, 0xb0e1b795L, 0x98aa4ec7L,
     /* 210*/ 0x0cc73b34L, 0x654276a3L, 0x8d1ba871L, 0x740a5216L, 0xe0d01a23L,
     /* 215*/ 0x9ed161d6L, 0x9f36a324L, 0x993ebb7fL, 0xfeb9491bL, 0x365ddcdbL,
     /* 220*/ 0x810cffc5L, 0x71ec0382L, 0x2249e7bfL, 0x48817046L, 0xf3a24a5bL,
     /* 225*/ 0x4288e4d9L, 0x0bf5c243L, 0x257fe151L, 0x95b64c0dL, 0x4164f066L,
     /* 230*/ 0xaaf7db08L, 0x73b1119dL, 0x8f9f7bb8L, 0xd6844596L, 0xf07a34a6L,
     /* 235*/ 0x53943d0aL, 0xf9dd166dL, 0x7a8957afL, 0xf8ba3ce5L, 0x27c9621eL,
     /* 240*/ 0x5cdae910L, 0xc8518998L, 0x941538feL, 0x136115d8L, 0xaba8443cL,
     /* 245*/ 0x4d01f931L, 0x34edf760L, 0xb45f266bL, 0xd5d4de14L, 0x52d8ac35L,
     /* 250*/ 0x15cfd885L, 0xcbc5cd21L, 0x4cd76d4dL, 0x7c80ef54L, 0xbc92ee75L,
     /* 255*/ 0x1e56a1f6L
     /* End   of S Box 7  */},

    {/* Start of S Box 8  */

     /*   0*/ 0xbaa20b6cL, 0x9ffbad26L, 0xe1f7d738L, 0x794aec8dL, 0xc9e9cf3cL,
     /*   5*/ 0x8a9a7846L, 0xc57c4685L, 0xb9a92fedL, 0x29cb141fL, 0x52f9ddb7L,
     /*  10*/ 0xf68ba6bcL, 0x19ccc020L, 0x4f584aaaL, 0x3bf6a596L, 0x003b7cf7L,
     /*  15*/ 0x54f0ce9aL, 0xa7ec4303L, 0x46cf0077L, 0x78d33aa1L, 0x215247d9L,
     /*  20*/ 0x74bcdf91L, 0x08381d30L, 0xdac43e40L, 0x64872531L, 0x0beffe5fL,
     /*  25*/ 0xb317f457L, 0xaebb12daL, 0xd5d0d67bL, 0x7d75c6b4L, 0x42a6d241L,
     /*  30*/ 0x1502d0a9L, 0x3fd97fffL, 0xc6c3ed28L, 0x81868d0aL, 0x92628bc5L,
     /*  35*/ 0x86679544L, 0xfd1867afL, 0x5ca3ea61L, 0x568d5578L, 0x4a2d71f4L,
     /*  40*/ 0x43c9d549L, 0x8d95de2bL, 0x6e5c74a0L, 0x9120ffc7L, 0x0d05d14aL,
     /*  45*/ 0xa93049d3L, 0xbfa80e17L, 0xf4096810L, 0x043f5ef5L, 0xa673b4f1L,
     /*  50*/ 0x6d780298L, 0xa4847783L, 0x5ee726fbL, 0x9934c281L, 0x220a588cL,
     /*  55*/ 0x384e240fL, 0x933d5c69L, 0x39e5ef47L, 0x26e8b8f3L, 0x4c1c6212L,
     /*  60*/ 0x8040f75dL, 0x074b7093L, 0x6625a8d7L, 0x36298945L, 0x76285088L,
     /*  65*/ 0x651d37c3L, 0x24f5274dL, 0xdbca3dabL, 0x186b7ee1L, 0xd80f8182L,
     /*  70*/ 0x14210c89L, 0x943a3075L, 0x4e6e11c4L, 0x4d7e6badL, 0xf05064c8L,
     /*  75*/ 0x025dcd97L, 0x4bc10302L, 0x7cede572L, 0x8f90a970L, 0xab88eebaL,
     /*  80*/ 0xb5998029L, 0x5124d839L, 0xb0eeb6a3L, 0x89ddabdcL, 0xe8074d76L,
     /*  85*/ 0xa1465223L, 0x32518cf2L, 0x9d39d4ebL, 0xc0d84524L, 0xe35e6ea8L,
     /*  90*/ 0x7abf3804L, 0x113e2348L, 0x9ae6069dL, 0xb4dfdabbL, 0xa8c5313fL,
     /*  95*/ 0x23ea3f79L, 0x530e36a2L, 0xa5fd228bL, 0x95d1d350L, 0x2b14cc09L,
     /* 100*/ 0x40042956L, 0x879d05ccL, 0x2064b9caL, 0xacaca40eL, 0xb29c846eL,
     /* 105*/ 0x9676c9e3L, 0x752b7b8aL, 0x7be2bcc2L, 0x6bd58f5eL, 0xd48f4c32L,
     /* 110*/ 0x606835e4L, 0x9cd7c364L, 0x2c269b7aL, 0x3a0d079cL, 0x73b683feL,
     /* 115*/ 0x45374f1eL, 0x10afa242L, 0x577f8666L, 0xddaa10f6L, 0xf34f561cL,
     /* 120*/ 0x3d355d6bL, 0xe47048aeL, 0xaa13c492L, 0x050344fdL, 0x2aab5151L,
     /* 125*/ 0xf5b26ae5L, 0xed919a59L, 0x5ac67900L, 0xf1cde380L, 0x0c79a11bL,
     /* 130*/ 0x351533fcL, 0xcd4d8e36L, 0x1f856005L, 0x690b9fddL, 0xe736dccfL,
     /* 135*/ 0x1d47bf6aL, 0x7f66c72aL, 0x85f21b7fL, 0x983cbdb6L, 0x01ebbebfL,
     /* 140*/ 0x035f3b99L, 0xeb111f34L, 0x28cefdc6L, 0x5bfc9ecdL, 0xf22eacb0L,
     /* 145*/ 0x9e41cbb2L, 0xe0f8327cL, 0x82e3e26fL, 0xfc43fc86L, 0xd0ba66dfL,
     /* 150*/ 0x489ef2a7L, 0xd9e0c81dL, 0x68690d52L, 0xcc451367L, 0xc2232e16L,
     /* 155*/ 0xe95a7335L, 0x0fdae19bL, 0xff5b962cL, 0x97596527L, 0xc46db333L,
     /* 160*/ 0x3ed4c562L, 0xc14c9d9eL, 0x5d6faa21L, 0x638e940dL, 0xf9316d58L,
     /* 165*/ 0x47b3b0eaL, 0x30ffcad2L, 0xce1bba7dL, 0x1e6108e6L, 0x2e1ea33dL,
     /* 170*/ 0x507bf05bL, 0xfafef94bL, 0xd17de8e2L, 0x5598b214L, 0x1663f813L,
     /* 175*/ 0x17d25a2dL, 0xeefa5ff9L, 0x582f4e37L, 0x12128773L, 0xfef17ab8L,
     /* 180*/ 0x06005322L, 0xbb32bbc9L, 0x8c898508L, 0x592c15f0L, 0xd38a4054L,
     /* 185*/ 0x4957b7d6L, 0xd2b891dbL, 0x37bd2d3eL, 0x34ad20cbL, 0x622288e9L,
     /* 190*/ 0x2dc7345aL, 0xafb416c0L, 0x1cf459b1L, 0xdc7739faL, 0x0a711a25L,
     /* 195*/ 0x13e18a0cL, 0x5f72af4cL, 0x6ac8db11L, 0xbe53c18eL, 0x1aa569b9L,
     /* 200*/ 0xef551ea4L, 0xa02a429fL, 0xbd16e790L, 0x7eb9171aL, 0x77d693d8L,
     /* 205*/ 0x8e06993aL, 0x9bde7560L, 0xe5801987L, 0xc37a09beL, 0xb8db76acL,
     /* 210*/ 0xe2087294L, 0x6c81616dL, 0xb7f30fe7L, 0xbc9b82bdL, 0xfba4e4d4L,
     /* 215*/ 0xc7b1012fL, 0xa20c043bL, 0xde9febd0L, 0x2f9297ceL, 0xe610aef8L,
     /* 220*/ 0x70b06f19L, 0xc86ae00bL, 0x0e01988fL, 0x41192ae0L, 0x448c1cb5L,
     /* 225*/ 0xadbe92eeL, 0x7293a007L, 0x1b54b5b3L, 0xd61f63d1L, 0xeae40a74L,
     /* 230*/ 0x61a72b55L, 0xec83a7d5L, 0x88942806L, 0x90a07da5L, 0xd7424b95L,
     /* 235*/ 0x67745b4eL, 0xa31a1853L, 0xca6021efL, 0xdfb56c4fL, 0xcbc2d915L,
     /* 240*/ 0x3c48e918L, 0x8bae3c63L, 0x6f659c71L, 0xf8b754c1L, 0x2782f3deL,
     /* 245*/ 0xf796f168L, 0x71492c84L, 0x33c0f5a6L, 0x3144f6ecL, 0x25dc412eL,
     /* 250*/ 0xb16c5743L, 0x83a1fa7eL, 0x0997b101L, 0xb627e6e8L, 0xcf33905cL,
     /* 255*/ 0x8456fb65L
     /* End   of S Box 8  */},

    {/* Start of S Box 9  */

     /*   0*/ 0xb29bea74L, 0xc35da605L, 0x305c1ca3L, 0xd2e9f5bcL, 0x6fd5bff4L,
     /*   5*/ 0xff347703L, 0xfc45b163L, 0xf498e068L, 0xb71229fcL, 0x81acc3fbL,
     /*  10*/ 0x78538a8bL, 0x984ecf81L, 0xa5da47a4L, 0x8f259eefL, 0x6475dc65L,
     /*  15*/ 0x081865b9L, 0x49e14a3cL, 0x19e66079L, 0xd382e91bL, 0x5b109794L,
     /*  20*/ 0x3f9f81e1L, 0x4470a388L, 0x41601abeL, 0xaaf9f407L, 0x8e175ef6L,
     /*  25*/ 0xed842297L, 0x893a4271L, 0x1790839aL, 0xd566a99eL, 0x6b417deeL,
     /*  30*/ 0x75c90d23L, 0x715edb31L, 0x723553f7L, 0x9afb50c9L, 0xfbc5f600L,
     /*  35*/ 0xcd3b6a4eL, 0x97ed0fbaL, 0x29689aecL, 0x63135c8eL, 0xf0e26c7eL,
     /*  40*/ 0x0692ae7fL, 0xdbb208ffL, 0x2ede3e9bL, 0x6a65bebdL, 0xd40867e9L,
     /*  45*/ 0xc954afc5L, 0x73b08201L, 0x7ffdf809L, 0x1195c24fL, 0x1ca5adcaL,
     /*  50*/ 0x74bd6d1fL, 0xb393c455L, 0xcadfd3faL, 0x99f13011L, 0x0ebca813L,
     /*  55*/ 0x60e791b8L, 0x6597ac7aL, 0x18a7e46bL, 0x09cb49d3L, 0x0b27df6dL,
     /*  60*/ 0xcfe52f87L, 0xcef66837L, 0xe6328035L, 0xfa87c592L, 0x37baff93L,
     /*  65*/ 0xd71fcc99L, 0xdcab205cL, 0x4d7a5638L, 0x48012510L, 0x62797558L,
     /*  70*/ 0xb6cf1fe5L, 0xbc311834L, 0x9c2373acL, 0x14ec6175L, 0xa439cbdfL,
     /*  75*/ 0x54afb0eaL, 0xd686960bL, 0xfdd0d47bL, 0x7b063902L, 0x8b78bac3L,
     /*  80*/ 0x26c6a4d5L, 0x5c0055b6L, 0x2376102eL, 0x0411783eL, 0x2aa3f1cdL,
     /*  85*/ 0x51fc6ea8L, 0x701ce243L, 0x9b2a0abbL, 0x0ad93733L, 0x6e80d03dL,
     /*  90*/ 0xaf6295d1L, 0xf629896fL, 0xa30b0648L, 0x463d8dd4L, 0x963f84cbL,
     /*  95*/ 0x01ff94f8L, 0x8d7fefdcL, 0x553611c0L, 0xa97c1719L, 0xb96af759L,
     /* 100*/ 0xe0e3c95eL, 0x0528335bL, 0x21fe5925L, 0x821a5245L, 0x807238b1L,
     /* 105*/ 0x67f23db5L, 0xea6b4eabL, 0x0da6f985L, 0xab1bc85aL, 0xef8c90e4L,
     /* 110*/ 0x4526230eL, 0x38eb8b1cL, 0x1b91cd91L, 0x9fce5f0cL, 0xf72cc72bL,
     /* 115*/ 0xc64f2617L, 0xdaf7857dL, 0x7d373cf1L, 0x28eaedd7L, 0x203887d0L,
     /* 120*/ 0xc49a155fL, 0xa251b3b0L, 0xf2d47ae3L, 0x3d9ef267L, 0x4a94ab2fL,
     /* 125*/ 0x7755a222L, 0x0205e329L, 0xc28fa7a7L, 0xaec1fe51L, 0x270f164cL,
     /* 130*/ 0x8c6d01bfL, 0x53b5bc98L, 0xc09d3febL, 0x834986ccL, 0x4309a12cL,
     /* 135*/ 0x578b2a96L, 0x3bb74b86L, 0x69561b4aL, 0x037e32f3L, 0xde335b08L,
     /* 140*/ 0xc5156be0L, 0xe7ef09adL, 0x93b834c7L, 0xa7719352L, 0x59302821L,
     /* 145*/ 0xe3529d26L, 0xf961da76L, 0xcb142c44L, 0xa0f3b98dL, 0x76502457L,
     /* 150*/ 0x945a414bL, 0x078eeb12L, 0xdff8de69L, 0xeb6c8c2dL, 0xbda90c4dL,
     /* 155*/ 0xe9c44d16L, 0x168dfd66L, 0xad64763bL, 0xa65fd764L, 0x95a29c06L,
     /* 160*/ 0x32d7713fL, 0x40f0b277L, 0x224af08fL, 0x004cb5e8L, 0x92574814L,
     /* 165*/ 0x8877d827L, 0x3e5b2d04L, 0x68c2d5f2L, 0x86966273L, 0x1d433adaL,
     /* 170*/ 0x8774988aL, 0x3c0e0bfeL, 0xddad581dL, 0x2fd654edL, 0x0f4769fdL,
     /* 175*/ 0xc181ee9dL, 0x5fd88f61L, 0x341dbb3aL, 0x528543f9L, 0xd92235cfL,
     /* 180*/ 0x1ea82eb4L, 0xb5cd790fL, 0x91d24f1eL, 0xa869e6c2L, 0x61f474d2L,
     /* 185*/ 0xcc205addL, 0x0c7bfba9L, 0xbf2b0489L, 0xb02d72d8L, 0x2b46ece6L,
     /* 190*/ 0xe4dcd90aL, 0xb8a11440L, 0xee8a63b7L, 0x854dd1a1L, 0xd1e00583L,
     /* 195*/ 0x42b40e24L, 0x9e8964deL, 0xb4b35d78L, 0xbec76f6eL, 0x24b9c620L,
     /* 200*/ 0xd8d399a6L, 0x5adb2190L, 0x2db12730L, 0x3a5866afL, 0x58c8fadbL,
     /* 205*/ 0x5d8844e7L, 0x8a4bf380L, 0x15a01d70L, 0x79f5c028L, 0x66be3b8cL,
     /* 210*/ 0xf3e42b53L, 0x56990039L, 0x2c0c3182L, 0x5e16407cL, 0xecc04515L,
     /* 215*/ 0x6c440284L, 0x4cb6701aL, 0x13bfc142L, 0x9d039f6aL, 0x4f6e92c8L,
     /* 220*/ 0xa1407c62L, 0x8483a095L, 0xc70ae1c4L, 0xe20213a2L, 0xbacafc41L,
     /* 225*/ 0x4ecc12b3L, 0x4bee3646L, 0x1fe807aeL, 0x25217f9cL, 0x35dde5f5L,
     /* 230*/ 0x7a7dd6ceL, 0xf89cce50L, 0xac07b718L, 0x7e73d2c6L, 0xe563e76cL,
     /* 235*/ 0x123ca536L, 0x3948ca56L, 0x9019dd49L, 0x10aa88d9L, 0xc82451e2L,
     /* 240*/ 0x473eb6d6L, 0x506fe854L, 0xe8bb03a5L, 0x332f4c32L, 0xfe1e1e72L,
     /* 245*/ 0xb1ae572aL, 0x7c0d7bc1L, 0xe1c37eb2L, 0xf542aa60L, 0xf1a48ea0L,
     /* 250*/ 0xd067b89fL, 0xbbfa195dL, 0x1a049b0dL, 0x315946aaL, 0x36d1b447L,
     /* 255*/ 0x6d2ebdf0L
     /* End   of S Box 9  */},

    {/* Start of S Box 10  */

     /*   0*/ 0x0d188a6dL, 0x12cea0dbL, 0x7e63740eL, 0x6a444821L, 0x253d234fL,
     /*   5*/ 0x6ffc6597L, 0x94a6bdefL, 0x33ee1b2fL, 0x0a6c00c0L, 0x3aa336b1L,
     /*  10*/ 0x5af55d17L, 0x265fb3dcL, 0x0e89cf4dL, 0x0786b008L, 0xc80055b8L,
     /*  15*/ 0x6b17c3ceL, 0x72b05a74L, 0xd21a8d78L, 0xa6b70840L, 0xfe8eae77L,
     /*  20*/ 0xed69565cL, 0x55e1bcf4L, 0x585c2f60L, 0xe06f1a62L, 0xad67c0cdL,
     /*  25*/ 0x7712af88L, 0x9cc26acaL, 0x1888053dL, 0x37eb853eL, 0x9215abd7L,
     /*  30*/ 0xde30adfcL, 0x1f1038e6L, 0x70c51c8aL, 0x8d586c26L, 0xf72bdd90L,
     /*  35*/ 0x4dc3ce15L, 0x68eaeefaL, 0xd0e9c8b9L, 0x200f9c44L, 0xddd141baL,
     /*  40*/ 0x024bf1d3L, 0x0f64c9d4L, 0xc421e9e9L, 0x9d11c14cL, 0x9a0dd9e4L,
     /*  45*/ 0x5f92ec19L, 0x1b980df0L, 0x1dcc4542L, 0xb8fe8c56L, 0x0c9c9167L,
     /*  50*/ 0x4e81eb49L, 0xca368f27L, 0xe3603b37L, 0xea08acccL, 0xac516992L,
     /*  55*/ 0xc34f513bL, 0x804d100dL, 0x6edca4c4L, 0xfc912939L, 0x29d219b0L,
     /*  60*/ 0x278aaa3cL, 0x4868da7dL, 0x54e890b7L, 0xb46d735aL, 0x514589aaL,
     /*  65*/ 0xd6c630afL, 0x4980dfe8L, 0xbe3ccc55L, 0x59d41202L, 0x650c078bL,
     /*  70*/ 0xaf3a9e7bL, 0x3ed9827aL, 0x9e79fc6eL, 0xaadbfbaeL, 0xc5f7d803L,
     /*  75*/ 0x3daf7f50L, 0x67b4f465L, 0x73406e11L, 0x39313f8cL, 0x8a6e6686L,
     /*  80*/ 0xd8075f1fL, 0xd3cbfed1L, 0x69c7e49cL, 0x930581e0L, 0xe4b1a5a8L,
     /*  85*/ 0xbbc45472L, 0x09ddbf58L, 0xc91d687eL, 0xbdbffda5L, 0x88c08735L,
     /*  90*/ 0xe9e36bf9L, 0xdb5ea9b6L, 0x95559404L, 0x08f432fbL, 0xe24ea281L,
     /*  95*/ 0x64663579L, 0x000b8010L, 0x7914e7d5L, 0x32fd0473L, 0xd1a7f0a4L,
     /* 100*/ 0x445ab98eL, 0xec72993fL, 0xa29a4d32L, 0xb77306d8L, 0xc7c97cf6L,
     /* 105*/ 0x7b6ab645L, 0xf5ef7adfL, 0xfb2e15f7L, 0xe747f757L, 0x5e944354L,
     /* 110*/ 0x234a2669L, 0x47e46359L, 0x9b9d11a9L, 0x40762cedL, 0x56f1de98L,
     /* 115*/ 0x11334668L, 0x890a9a70L, 0x1a296113L, 0xb3bd4af5L, 0x163b7548L,
     /* 120*/ 0xd51b4f84L, 0xb99b2abcL, 0x3cc1dc30L, 0xa9f0b56cL, 0x812272b2L,
     /* 125*/ 0x0b233a5fL, 0xb650dbf2L, 0xf1a0771bL, 0x36562b76L, 0xdc037b0fL,
     /* 130*/ 0x104c97ffL, 0xc2ec98d2L, 0x90596f22L, 0x28b6620bL, 0xdf42b212L,
     /* 135*/ 0xfdbc4243L, 0xf3fb175eL, 0x4a2d8b00L, 0xe8f3869bL, 0x30d69bc3L,
     /* 140*/ 0x853714c8L, 0xa7751d2eL, 0x31e56deaL, 0xd4840b0cL, 0x9685d783L,
     /* 145*/ 0x068c9333L, 0x8fba032cL, 0x76d7bb47L, 0x6d0ee22bL, 0xb546794bL,
     /* 150*/ 0xd971b894L, 0x8b09d253L, 0xa0ad5761L, 0xee77ba06L, 0x46359f31L,
     /* 155*/ 0x577cc7ecL, 0x52825efdL, 0xa4beed95L, 0x9825c52aL, 0xeb48029aL,
     /* 160*/ 0xbaae59f8L, 0xcf490ee1L, 0xbc990164L, 0x8ca49dfeL, 0x4f38a6e7L,
     /* 165*/ 0x2ba98389L, 0x8228f538L, 0x199f64acL, 0x01a1cac5L, 0xa8b51641L,
     /* 170*/ 0x5ce72d01L, 0x8e5df26bL, 0x60f28e1eL, 0xcd5be125L, 0xe5b376bfL,
     /* 175*/ 0x1c8d3116L, 0x7132cbb3L, 0xcb7ae320L, 0xc0fa5366L, 0xd7653e34L,
     /* 180*/ 0x971c88c2L, 0xc62c7dd0L, 0x34d0a3daL, 0x868f6709L, 0x7ae6fa8fL,
     /* 185*/ 0x22bbd523L, 0x66cd3d5bL, 0x1ef9288dL, 0xf9cf58c1L, 0x5b784e80L,
     /* 190*/ 0x7439a191L, 0xae134c36L, 0x9116c463L, 0x2e9e1396L, 0xf8611f3aL,
     /* 195*/ 0x2d2f3307L, 0x247f37ddL, 0xc1e2ff9dL, 0x43c821e5L, 0x05ed5cabL,
     /* 200*/ 0xef74e80aL, 0x4cca6028L, 0xf0ac3cbdL, 0x5d874b29L, 0x6c62f6a6L,
     /* 205*/ 0x4b2a2ef3L, 0xb1aa2087L, 0x62a5d0a3L, 0x0327221cL, 0xb096b4c6L,
     /* 210*/ 0x417ec693L, 0xaba840d6L, 0x789725ebL, 0xf4b9e02dL, 0xe6e00975L,
     /* 215*/ 0xcc04961aL, 0x63f624bbL, 0x7fa21ecbL, 0x2c01ea7fL, 0xb2415005L,
     /* 220*/ 0x2a8bbeb5L, 0x83b2b14eL, 0xa383d1a7L, 0x5352f96aL, 0x043ecdadL,
     /* 225*/ 0xce1918a1L, 0xfa6be6c9L, 0x50def36fL, 0xf6b80ce2L, 0x4543ef7cL,
     /* 230*/ 0x9953d651L, 0xf257955dL, 0x87244914L, 0xda1e0a24L, 0xffda4785L,
     /* 235*/ 0x14d327a2L, 0x3b93c29fL, 0x840684b4L, 0x61ab71a0L, 0x9f7b784aL,
     /* 240*/ 0x2fd570cfL, 0x15955bdeL, 0x38f8d471L, 0x3534a718L, 0x133fb71dL,
     /* 245*/ 0x3fd80f52L, 0x4290a8beL, 0x75ff44c7L, 0xa554e546L, 0xe1023499L,
     /* 250*/ 0xbf2652e3L, 0x7d20399eL, 0xa1df7e82L, 0x177092eeL, 0x217dd3f1L,
     /* 255*/ 0x7c1ff8d9L
     /* End   of S Box 10  */},

    {/* Start of S Box 11  */

     /*   0*/ 0x12113f2eL, 0xbfbd0785L, 0xf11793fbL, 0xa5bff566L, 0x83c7b0e5L,
     /*   5*/ 0x72fb316bL, 0x75526a9aL, 0x41e0e612L, 0x7156ba09L, 0x53ce7deeL,
     /*  10*/ 0x0aa26881L, 0xa43e0d7dL, 0x3da73ca3L, 0x182761edL, 0xbd5077ffL,
     /*  15*/ 0x56db4aa0L, 0xe792711cL, 0xf0a4eb1dL, 0x7f878237L, 0xec65c4e8L,
     /*  20*/ 0x08dc8d43L, 0x0f8ce142L, 0x8258abdaL, 0xf4154e16L, 0x49dec2fdL,
     /*  25*/ 0xcd8d5705L, 0x6c2c3a0fL, 0x5c12bb88L, 0xeff3cdb6L, 0x2c89ed8cL,
     /*  30*/ 0x7beba967L, 0x2a142157L, 0xc6d0836fL, 0xb4f97e96L, 0x6931e969L,
     /*  35*/ 0x514e6c7cL, 0xa7792600L, 0x0bbbf780L, 0x59671bbdL, 0x0707b676L,
     /*  40*/ 0x37482d93L, 0x80af1479L, 0x3805a60dL, 0xe1f4cac1L, 0x580b3074L,
     /*  45*/ 0x30b8d6ceL, 0x05a304beL, 0xd176626dL, 0xebca97f3L, 0xbb201f11L,
     /*  50*/ 0x6a1afe23L, 0xffaa86e4L, 0x62b4da49L, 0x1b6629f5L, 0xf5d9e092L,
     /*  55*/ 0xf37f3dd1L, 0x619bd45bL, 0xa6ec8e4fL, 0x29c80939L, 0x0c7c0c34L,
     /*  60*/ 0x9cfe6e48L, 0xe65fd3acL, 0x73613b65L, 0xb3c669f9L, 0xbe2e8a9eL,
     /*  65*/ 0x286f9678L, 0x5797fd13L, 0x99805d75L, 0xcfb641c5L, 0xa91074baL,
     /*  70*/ 0x6343af47L, 0x6403cb46L, 0x8894c8dbL, 0x2663034cL, 0x3c40dc5eL,
     /*  75*/ 0x00995231L, 0x96789aa2L, 0x2efde4b9L, 0x7dc195e1L, 0x547dadd5L,
     /*  80*/ 0x06a8ea04L, 0xf2347a63L, 0x5e0dc6f7L, 0x8462dfc2L, 0x1e6b2c3cL,
     /*  85*/ 0x9bd275b3L, 0x91d419e2L, 0xbcefd17eL, 0xb9003924L, 0xd07e7320L,
     /*  90*/ 0xdef0495cL, 0xc36ad00eL, 0x1785b1abL, 0x92e20bcfL, 0xb139f0e9L,
     /*  95*/ 0x675bb9a1L, 0xaecfa4afL, 0x132376cbL, 0xe84589d3L, 0x79a05456L,
     /* 100*/ 0xa2f860bcL, 0x1ae4f8b5L, 0x20df4db4L, 0xa1e1428bL, 0x3bf60a1aL,
     /* 105*/ 0x27ff7bf1L, 0xcb44c0e7L, 0xf7f587c4L, 0x1f3b9b21L, 0x94368f01L,
     /* 110*/ 0x856e23a4L, 0x6f93de3fL, 0x773f5bbfL, 0x8b22056eL, 0xdf41f654L,
     /* 115*/ 0xb8246ff4L, 0x8d57bff2L, 0xd57167eaL, 0xc5699f22L, 0x40734ba7L,
     /* 120*/ 0x5d5c2772L, 0x033020a8L, 0xe30a7c4dL, 0xadc40fd6L, 0x76353441L,
     /* 125*/ 0x5aa5229bL, 0x81516590L, 0xda49f14eL, 0x4fa672a5L, 0x4d9fac5fL,
     /* 130*/ 0x154be230L, 0x8a7a5cc0L, 0xce3d2f84L, 0xcca15514L, 0x5221360cL,
     /* 135*/ 0xaf0fb81eL, 0x5bdd5873L, 0xf6825f8fL, 0x1113d228L, 0x70ad996cL,
     /* 140*/ 0x93320051L, 0x60471c53L, 0xe9ba567bL, 0x3a462ae3L, 0x5f55e72dL,
     /* 145*/ 0x1d3c5ad7L, 0xdcfc45ecL, 0x34d812efL, 0xfa96ee1bL, 0x369d1ef8L,
     /* 150*/ 0xc9b1a189L, 0x7c1d3555L, 0x50845edcL, 0x4bb31877L, 0x8764a060L,
     /* 155*/ 0x8c9a9415L, 0x230e1a3aL, 0xb05e9133L, 0x242b9e03L, 0xa3b99db7L,
     /* 160*/ 0xc2d7fb0aL, 0x3333849dL, 0xd27278d4L, 0xb5d3efa6L, 0x78ac28adL,
     /* 165*/ 0xc7b2c135L, 0x0926ecf0L, 0xc1374c91L, 0x74f16d98L, 0x2274084aL,
     /* 170*/ 0x3f6d9cfaL, 0x7ac0a383L, 0xb73aff1fL, 0x3909a23dL, 0x9f1653aeL,
     /* 175*/ 0x4e2f3e71L, 0xca5ab22aL, 0xe01e3858L, 0x90c5a7ebL, 0x3e4a17dfL,
     /* 180*/ 0xaa987fb0L, 0x488bbd62L, 0xb625062bL, 0x2d776bb8L, 0x43b5fc08L,
     /* 185*/ 0x1490d532L, 0xd6d12495L, 0x44e89845L, 0x2fe60118L, 0x9d9ef950L,
     /* 190*/ 0xac38133eL, 0xd3864329L, 0x017b255aL, 0xfdc2dd26L, 0x256851e6L,
     /* 195*/ 0x318e7086L, 0x2bfa4861L, 0x89eac706L, 0xee5940c6L, 0x68c3bc2fL,
     /* 200*/ 0xe260334bL, 0x98da90bbL, 0xf818f270L, 0x4706d897L, 0x212d3799L,
     /* 205*/ 0x4cf7e5d0L, 0xd9c9649fL, 0xa85db5cdL, 0x35e90e82L, 0x6b881152L,
     /* 210*/ 0xab1c02c7L, 0x46752b02L, 0x664f598eL, 0x45ab2e64L, 0xc4cdb4b2L,
     /* 215*/ 0xba42107fL, 0xea2a808aL, 0x971bf3deL, 0x4a54a836L, 0x4253aeccL,
     /* 220*/ 0x1029be68L, 0x6dcc9225L, 0xe4bca56aL, 0xc0ae50b1L, 0x7e011d94L,
     /* 225*/ 0xe59c162cL, 0xd8e5c340L, 0xd470fa0bL, 0xb2be79ddL, 0xd783889cL,
     /* 230*/ 0x1cede8f6L, 0x8f4c817aL, 0xddb785c9L, 0x860232d8L, 0x198aaad9L,
     /* 235*/ 0xa0814738L, 0x3219cffcL, 0x169546d2L, 0xfc0cb759L, 0x55911510L,
     /* 240*/ 0x04d5cec3L, 0xed08cc3bL, 0x0d6cf427L, 0xc8e38ccaL, 0x0eeee3feL,
     /* 245*/ 0x9ee7d7c8L, 0xf9f24fa9L, 0xdb04b35dL, 0x9ab0c9e0L, 0x651f4417L,
     /* 250*/ 0x028f8b07L, 0x6e28d9aaL, 0xfba96319L, 0x8ed66687L, 0xfecbc58dL,
     /* 255*/ 0x954ddb44L
     /* End   of S Box 11  */},

    {/* Start of S Box 12  */

     /*   0*/ 0x7b0bdffeL, 0x865d16b1L, 0x49a058c0L, 0x97abaa3fL, 0xcaacc75dL,
     /*   5*/ 0xaba6c17dL, 0xf8746f92L, 0x6f48aeedL, 0x8841d4b5L, 0xf36a146aL,
     /*  10*/ 0x73c390abL, 0xe6fb558fL, 0x87b1019eL, 0x26970252L, 0x246377b2L,
     /*  15*/ 0xcbf676aeL, 0xf923db06L, 0xf7389116L, 0x14c81a90L, 0x83114eb4L,
     /*  20*/ 0x8b137559L, 0x95a86a7aL, 0xd5b8da8cL, 0xc4df780eL, 0x5a9cb3e2L,
     /*  25*/ 0xe44d4062L, 0xe8dc8ef6L, 0x9d180845L, 0x817ad18bL, 0xc286c85bL,
     /*  30*/ 0x251f20deL, 0xee6d5933L, 0xf6edef81L, 0xd4d16c1eL, 0xc94a0c32L,
     /*  35*/ 0x8437fd22L, 0x3271ee43L, 0x42572aeeL, 0x5f91962aL, 0x1c522d98L,
     /*  40*/ 0x59b23f0cL, 0xd86b8804L, 0x08c63531L, 0x2c0d7a40L, 0xb97c4729L,
     /*  45*/ 0x04964df9L, 0x13c74a17L, 0x5878362fL, 0x4c808cd6L, 0x092cb1e0L,
     /*  50*/ 0x6df02885L, 0xa0c2105eL, 0x8aba9e68L, 0x64e03057L, 0xe5d61325L,
     /*  55*/ 0x0e43a628L, 0x16dbd62bL, 0x2733d90bL, 0x3ae57283L, 0xc0c1052cL,
     /*  60*/ 0x4b6fb620L, 0x37513953L, 0xfc898bb3L, 0x471b179fL, 0xdf6e66b8L,
     /*  65*/ 0xd32142f5L, 0x9b30fafcL, 0x4ed92549L, 0x105c6d99L, 0x4acd69ffL,
     /*  70*/ 0x2b1a27d3L, 0x6bfcc067L, 0x6301a278L, 0xad36e6f2L, 0xef3ff64eL,
     /*  75*/ 0x56b3cadbL, 0x0184bb61L, 0x17beb9fdL, 0xfaec6109L, 0xa2e1ffa1L,
     /*  80*/ 0x2fd224f8L, 0x238f5be6L, 0x8f8570cfL, 0xaeb5f25aL, 0x4f1d3e64L,
     /*  85*/ 0x4377eb24L, 0x1fa45346L, 0xb2056386L, 0x52095e76L, 0xbb7b5adcL,
     /*  90*/ 0x3514e472L, 0xdde81e6eL, 0x7acea9c4L, 0xac15cc48L, 0x71c97d93L,
     /*  95*/ 0x767f941cL, 0x911052a2L, 0xffea09bfL, 0xfe3ddcf0L, 0x15ebf3aaL,
     /* 100*/ 0x9235b8bcL, 0x75408615L, 0x9a723437L, 0xe1a1bd38L, 0x33541b7eL,
     /* 105*/ 0x1bdd6856L, 0xb307e13eL, 0x90814bb0L, 0x51d7217bL, 0x0bb92219L,
     /* 110*/ 0x689f4500L, 0xc568b01fL, 0x5df3d2d7L, 0x3c0ecd0dL, 0x2a0244c8L,
     /* 115*/ 0x852574e8L, 0xe72f23a9L, 0x8e26ed02L, 0x2d92cbddL, 0xdabc0458L,
     /* 120*/ 0xcdf5feb6L, 0x9e4e8dccL, 0xf4f1e344L, 0x0d8c436dL, 0x4427603bL,
     /* 125*/ 0xbdd37fdaL, 0x80505f26L, 0x8c7d2b8eL, 0xb73273c5L, 0x397362eaL,
     /* 130*/ 0x618a3811L, 0x608bfb88L, 0x06f7d714L, 0x212e4677L, 0x28efceadL,
     /* 135*/ 0x076c0371L, 0x36a3a4d9L, 0x5487b455L, 0x3429a365L, 0x65d467acL,
     /* 140*/ 0x78ee7eebL, 0x99bf12b7L, 0x4d129896L, 0x772a5601L, 0xcce284c7L,
     /* 145*/ 0x2ed85c21L, 0xd099e8a4L, 0xa179158aL, 0x6ac0ab1aL, 0x299a4807L,
     /* 150*/ 0xbe67a58dL, 0xdc19544aL, 0xb8949b54L, 0x8d315779L, 0xb6f849c1L,
     /* 155*/ 0x53c5ac34L, 0x66de92a5L, 0xf195dd13L, 0x318d3a73L, 0x301ec542L,
     /* 160*/ 0x0cc40da6L, 0xf253ade4L, 0x467ee566L, 0xea5585ecL, 0x3baf19bbL,
     /* 165*/ 0x7de9f480L, 0x79006e7cL, 0xa9b7a197L, 0xa44bd8f1L, 0xfb2ba739L,
     /* 170*/ 0xec342fd4L, 0xed4fd32dL, 0x3d1789baL, 0x400f5d7fL, 0xc798f594L,
     /* 175*/ 0x4506a847L, 0x034c0a95L, 0xe2162c9dL, 0x55a9cfd0L, 0x692d832eL,
     /* 180*/ 0xcf9db2caL, 0x5e2287e9L, 0xd2610ef3L, 0x1ae7ecc2L, 0x48399ca0L,
     /* 185*/ 0xa7e4269bL, 0x6ee3a0afL, 0x7065bfe1L, 0xa6ffe708L, 0x2256804cL,
     /* 190*/ 0x7476e21bL, 0x41b0796cL, 0x7c243b05L, 0x000a950fL, 0x1858416bL,
     /* 195*/ 0xf5a53c89L, 0xe9fef823L, 0x3f443275L, 0xe0cbf091L, 0x0af27b84L,
     /* 200*/ 0x3ebb0f27L, 0x1de6f7f4L, 0xc31c29f7L, 0xb166de3dL, 0x12932ec3L,
     /* 205*/ 0x9c0c0674L, 0x5cda81b9L, 0xd1bd9d12L, 0xaffd7c82L, 0x8962bca7L,
     /* 210*/ 0xa342c4a8L, 0x62457151L, 0x82089f03L, 0xeb49c670L, 0x5b5f6530L,
     /* 215*/ 0x7e28bad2L, 0x20880ba3L, 0xf0faafcdL, 0xce82b56fL, 0x0275335cL,
     /* 220*/ 0xc18e8afbL, 0xde601d69L, 0xba9b820aL, 0xc8a2be4fL, 0xd7cac335L,
     /* 225*/ 0xd9a73741L, 0x115e974dL, 0x7f5ac21dL, 0x383bf9c6L, 0xbcaeb75fL,
     /* 230*/ 0xfd0350ceL, 0xb5d06b87L, 0x9820e03cL, 0x72d5f163L, 0xe3644fc9L,
     /* 235*/ 0xa5464c4bL, 0x57048fcbL, 0x9690c9dfL, 0xdbf9eafaL, 0xbff4649aL,
     /* 240*/ 0x053c00e3L, 0xb4b61136L, 0x67593dd1L, 0x503ee960L, 0x9fb4993aL,
     /* 245*/ 0x19831810L, 0xc670d518L, 0xb05b51d8L, 0x0f3a1ce5L, 0x6caa1f9cL,
     /* 250*/ 0xaacc31beL, 0x949ed050L, 0x1ead07e7L, 0xa8479abdL, 0xd6cffcd5L,
     /* 255*/ 0x936993efL
     /* End   of S Box 12  */},

    {/* Start of S Box 13  */

     /*   0*/ 0x472e91cbL, 0x5444b5b6L, 0x62be5861L, 0x1be102c7L, 0x63e4b31eL,
     /*   5*/ 0xe81f71b7L, 0x9e2317c9L, 0x39a408aeL, 0x518024f4L, 0x1731c66fL,
     /*  10*/ 0x68cbc918L, 0x71fb0c9eL, 0xd03b7fddL, 0x7d6222ebL, 0x9057eda3L,
     /*  15*/ 0x1a34a407L, 0x8cc2253dL, 0xb6f6979dL, 0x835675dcL, 0xf319be9fL,
     /*  20*/ 0xbe1cd743L, 0x4d32fee4L, 0x77e7d887L, 0x37e9ebfdL, 0x15f851e8L,
     /*  25*/ 0x23dc3706L, 0x19d78385L, 0xbd506933L, 0xa13ad4a6L, 0x913f1a0eL,
     /*  30*/ 0xdde560b9L, 0x9a5f0996L, 0xa65a0435L, 0x48d34c4dL, 0xe90839a7L,
     /*  35*/ 0x8abba54eL, 0x6fd13ce1L, 0xc7eebd3cL, 0x0e297602L, 0x58b9bbb4L,
     /*  40*/ 0xef7901e6L, 0x64a28a62L, 0xa509875aL, 0xf8834442L, 0x2702c709L,
     /*  45*/ 0x07353f31L, 0x3b39f665L, 0xf5b18b49L, 0x4010ae37L, 0x784de00bL,
     /*  50*/ 0x7a1121e9L, 0xde918ed3L, 0xc8529dcdL, 0x816a5d05L, 0x02ed8298L,
     /*  55*/ 0x04e3dd84L, 0xfd2bc3e2L, 0xaf167089L, 0x96af367eL, 0xa4da6232L,
     /*  60*/ 0x18ff7325L, 0x05f9a9f1L, 0x4fefb9f9L, 0xcd94eaa5L, 0xbfaa5069L,
     /*  65*/ 0xa0b8c077L, 0x60d86f57L, 0xfe71c813L, 0x29ebd2c8L, 0x4ca86538L,
     /*  70*/ 0x6bf1a030L, 0xa237b88aL, 0xaa8af41dL, 0xe1f7b6ecL, 0xe214d953L,
     /*  75*/ 0x33057879L, 0x49caa736L, 0xfa45cff3L, 0xc063b411L, 0xba7e27d0L,
     /*  80*/ 0x31533819L, 0x2a004ac1L, 0x210efc3fL, 0x2646885eL, 0x66727dcfL,
     /*  85*/ 0x9d7fbf54L, 0xa8dd0ea8L, 0x3447caceL, 0x3f0c14dbL, 0xb8382aacL,
     /*  90*/ 0x4ace3539L, 0x0a518d51L, 0x95178981L, 0x35aee2caL, 0x73f0f7e3L,
     /*  95*/ 0x94281140L, 0x59d0e523L, 0xd292cb88L, 0x565d1b27L, 0x7ec8fbafL,
     /* 100*/ 0x069af08dL, 0xc127fd24L, 0x0bc77b10L, 0x5f03e7efL, 0x453e99baL,
     /* 105*/ 0xeed9ff7fL, 0x87b55215L, 0x7915ab4cL, 0xd389a358L, 0x5e75ce6dL,
     /* 110*/ 0x28d655c0L, 0xdad26c73L, 0x2e2510ffL, 0x9fa7eeccL, 0x1d0629c3L,
     /* 115*/ 0xdc9c9c46L, 0x2d67ecd7L, 0xe75e94bdL, 0x3d649e2aL, 0x6c413a2bL,
     /* 120*/ 0x706f0d7cL, 0xdfb0127bL, 0x4e366b55L, 0x2c825650L, 0x24205720L,
     /* 125*/ 0xb5c998f7L, 0x3e95462cL, 0x756e5c72L, 0x3259488fL, 0x11e8771aL,
     /* 130*/ 0xa7c0a617L, 0x577663e5L, 0x089b6401L, 0x8eab1941L, 0xae55ef8cL,
     /* 135*/ 0x3aac5460L, 0xd4e6262fL, 0x5d979a47L, 0xb19823b0L, 0x7f8d6a0cL,
     /* 140*/ 0xffa08683L, 0x0170cd0fL, 0x858cd5d8L, 0x53961c90L, 0xc4c61556L,
     /* 145*/ 0x41f2f226L, 0xcfcd062dL, 0xf24c03b8L, 0xea81df5bL, 0x7be2fa52L,
     /* 150*/ 0xb361f98bL, 0xc2901316L, 0x55ba4bbcL, 0x93b234a9L, 0x0fbc6603L,
     /* 155*/ 0x80a96822L, 0x6d60491fL, 0x22bd00f8L, 0xbcad5aadL, 0x52f3f13bL,
     /* 160*/ 0x42fd2b28L, 0xb41dd01cL, 0xc52c93bfL, 0xfc663094L, 0x8f58d100L,
     /* 165*/ 0x43fecc08L, 0xc6331e5dL, 0xe6480f66L, 0xca847204L, 0x4bdf1da0L,
     /* 170*/ 0x30cc2efbL, 0x13e02deaL, 0xfb49ac45L, 0xf9d4434fL, 0xf47c5b9cL,
     /* 175*/ 0x148879c2L, 0x039fc234L, 0xa3db9bfcL, 0xd1a1dc5cL, 0x763d7cd4L,
     /* 180*/ 0xed6d2f93L, 0xab13af6eL, 0x1e8e054aL, 0xd68f4f9aL, 0xc30484b3L,
     /* 185*/ 0xd7d50afaL, 0x6930855fL, 0xcc07db95L, 0xce746db1L, 0x744e967dL,
     /* 190*/ 0xf16cf575L, 0x8643e8b5L, 0xf0eae38eL, 0xe52de1d1L, 0x6587dae0L,
     /* 195*/ 0x0c4b8121L, 0x1c7ac567L, 0xac0db20aL, 0x36c3a812L, 0x5b1a4514L,
     /* 200*/ 0xa9a3f868L, 0xb9263baaL, 0xcb3ce9d2L, 0xe44fb1a4L, 0x9221bc82L,
     /* 205*/ 0xb29390feL, 0x6ab41863L, 0x974a3e2eL, 0x89f531c5L, 0x255ca13eL,
     /* 210*/ 0x8b65d348L, 0xec248f78L, 0xd8fc16f0L, 0x50ecdeeeL, 0x09010792L,
     /* 215*/ 0x3c7d1fb2L, 0xeba5426bL, 0x847b417aL, 0x468b40d9L, 0x8dc4e680L,
     /* 220*/ 0x7cc1f391L, 0x2f1eb086L, 0x6e5baa6aL, 0xe0b395daL, 0xe31b2cf6L,
     /* 225*/ 0xd9690b0dL, 0x729ec464L, 0x38403ddeL, 0x610b80a2L, 0x5cf433abL,
     /* 230*/ 0xb0785fc4L, 0xd512e4c6L, 0xbbb7d699L, 0x5a86591bL, 0x10cf5376L,
     /* 235*/ 0x12bf9f4bL, 0x980fbaa1L, 0x992a4e70L, 0x20fa7ae7L, 0xf7996ebbL,
     /* 240*/ 0xc918a2beL, 0x82de74f2L, 0xad54209bL, 0xf66b4d74L, 0x1fc5b771L,
     /* 245*/ 0x169d9229L, 0x887761dfL, 0x00b667d5L, 0xdb425e59L, 0xb72f2844L,
     /* 250*/ 0x9b0ac1f5L, 0x9c737e3aL, 0x2b85476cL, 0x6722add6L, 0x44a63297L,
     /* 255*/ 0x0d688cedL
     /* End   of S Box 13  */},

    {/* Start of S Box 14  */

     /*   0*/ 0xabc59484L, 0x4107778aL, 0x8ad94c6fL, 0xfe83df90L, 0x0f64053fL,
     /*   5*/ 0xd1292e9dL, 0xc5744356L, 0x8dd1abb4L, 0x4c4e7667L, 0xfb4a7fc1L,
     /*  10*/ 0x74f402cbL, 0x70f06afdL, 0xa82286f2L, 0x918dd076L, 0x7a97c5ceL,
     /*  15*/ 0x48f7bde3L, 0x6a04d11dL, 0xac243ef7L, 0x33ac10caL, 0x2f7a341eL,
     /*  20*/ 0x5f75157aL, 0xf4773381L, 0x591c870eL, 0x78df8cc8L, 0x22f3adb0L,
     /*  25*/ 0x251a5993L, 0x09fbef66L, 0x796942a8L, 0x97541d2eL, 0x2373daa9L,
     /*  30*/ 0x1bd2f142L, 0xb57e8eb2L, 0xe1a5bfdbL, 0x7d0efa92L, 0xb3442c94L,
     /*  35*/ 0xd2cb6447L, 0x386ac97eL, 0x66d61805L, 0xbdada15eL, 0x11bc1aa7L,
     /*  40*/ 0x14e9f6eaL, 0xe533a0c0L, 0xf935ee0aL, 0x8fee8a04L, 0x810d6d85L,
     /*  45*/ 0x7c68b6d6L, 0x4edc9aa2L, 0x956e897dL, 0xed87581aL, 0x264be9d7L,
     /*  50*/ 0xff4ddb29L, 0x823857c2L, 0xe005a9a0L, 0xf1cc2450L, 0x6f9951e1L,
     /*  55*/ 0xaade2310L, 0xe70c75f5L, 0x83e1a31fL, 0x4f7dde8eL, 0xf723b563L,
     /*  60*/ 0x368e0928L, 0x86362b71L, 0x21e8982dL, 0xdfb3f92bL, 0x44676352L,
     /*  65*/ 0x99efba31L, 0x2eab4e1cL, 0xfc6ca5e7L, 0x0ebe5d4eL, 0xa0717d0cL,
     /*  70*/ 0xb64f8199L, 0x946b31a1L, 0x5656cbc6L, 0xcffec3efL, 0x622766c9L,
     /*  75*/ 0xfa211e35L, 0x52f98b89L, 0x6d01674bL, 0x4978a802L, 0xf651f701L,
     /*  80*/ 0x15b0d43dL, 0xd6ff4683L, 0x3463855fL, 0x672ba29cL, 0xbc128312L,
     /*  85*/ 0x4626a70dL, 0xc8927a5aL, 0xb8481cf9L, 0x1c962262L, 0xa21196baL,
     /*  90*/ 0xbaba5ee9L, 0x5bb162d0L, 0x69943bd1L, 0x0c47e35cL, 0x8cc9619aL,
     /*  95*/ 0xe284d948L, 0x271bf264L, 0xc27fb398L, 0x4bc70897L, 0x60cf202cL,
     /* 100*/ 0x7f42d6aaL, 0xa5a13506L, 0x5d3e8860L, 0xcea63d3cL, 0x63bf0a8fL,
     /* 105*/ 0xf02e9efaL, 0xb17b0674L, 0xb072b1d3L, 0x06e5723bL, 0x3737e436L,
     /* 110*/ 0x24aa49c7L, 0x0ded0d18L, 0xdb256b14L, 0x58b27877L, 0xecb49f54L,
     /* 115*/ 0x6c40256aL, 0x6ea92ffbL, 0x3906aa4cL, 0xc9866fd5L, 0x4549323eL,
     /* 120*/ 0xa7b85fabL, 0x1918cc27L, 0x7308d7b5L, 0x1e16c7adL, 0x71850b37L,
     /* 125*/ 0x3095fd78L, 0xa63b70e6L, 0xd880e2aeL, 0x3e282769L, 0xa39ba6bcL,
     /* 130*/ 0x98700fa3L, 0xf34c53e8L, 0x288af426L, 0xb99d930fL, 0xf5b99df1L,
     /* 135*/ 0xe9d0c8cfL, 0x5ac8405dL, 0x50e7217bL, 0x511fbbbeL, 0x2ca2e639L,
     /* 140*/ 0xc020301bL, 0x356dbc00L, 0x8e43ddb9L, 0x4d327b4aL, 0xf20ff3edL,
     /* 145*/ 0x1dbb29bdL, 0x43d44779L, 0xa1b68f70L, 0x6114455bL, 0xe63d280bL,
     /* 150*/ 0x6bf6ff65L, 0x10fc39e5L, 0x3dae126eL, 0xc1d7cf11L, 0xcb60b795L,
     /* 155*/ 0x1789d5b3L, 0x9bca36b7L, 0x08306075L, 0x84615608L, 0x8b3a0186L,
     /* 160*/ 0xe88fbecdL, 0x7ba47c4dL, 0x2de44dacL, 0x653fe58dL, 0xcca0b968L,
     /* 165*/ 0xd7fa0e72L, 0x93901780L, 0x1f2c26ccL, 0xae595b6bL, 0xa9ecea9bL,
     /* 170*/ 0xe3dbf8c4L, 0x319cc130L, 0x12981196L, 0x01a3a4deL, 0x32c454b6L,
     /* 175*/ 0x755bd817L, 0x3cd871e4L, 0xa48bb8daL, 0x02fdec09L, 0xfd2dc2e2L,
     /* 180*/ 0x9e578088L, 0x9a9f916dL, 0x4065fe6cL, 0x1853999eL, 0xc7793f23L,
     /* 185*/ 0xdc1016bbL, 0x969355ffL, 0x7ef292f6L, 0xcdce4adcL, 0x05e24416L,
     /* 190*/ 0x85c16c46L, 0xd441d37fL, 0x57bd6855L, 0x8746f54fL, 0x9ca773dfL,
     /* 195*/ 0x770bae22L, 0x54828413L, 0xb75e4b19L, 0x04c35c03L, 0xbf7cca07L,
     /* 200*/ 0x2955c4ddL, 0x721db041L, 0xb2394f33L, 0x03f51387L, 0x89b73c9fL,
     /* 205*/ 0x0b1737f3L, 0x07e69024L, 0x9231d245L, 0x76193861L, 0x88159c15L,
     /* 210*/ 0xdeb552d9L, 0xd9767e40L, 0x20c6c0c3L, 0x4281977cL, 0xf8afe1e0L,
     /* 215*/ 0xd32a0751L, 0x3fc27432L, 0xddf1dcc5L, 0x68581f34L, 0x3bcd5025L,
     /* 220*/ 0x0091b2eeL, 0x4aeb6944L, 0x1602e743L, 0xea09eb58L, 0xef0a2a8bL,
     /* 225*/ 0x641e03a5L, 0xeb50e021L, 0x5c8ccef8L, 0x802ff0b8L, 0xd5e3edfeL,
     /* 230*/ 0xc4dd1b49L, 0x5334cd2aL, 0x13f82d2fL, 0x47450c20L, 0x55dafbd2L,
     /* 235*/ 0xbec0c6f4L, 0xb45d7959L, 0x3ad36e8cL, 0x0aa8ac57L, 0x1a3c8d73L,
     /* 240*/ 0xe45aafb1L, 0x9f664838L, 0xc6880053L, 0xd0039bbfL, 0xee5f19ebL,
     /* 245*/ 0xca0041d8L, 0xbbea3aafL, 0xda628291L, 0x9d5c95d4L, 0xadd504a6L,
     /* 250*/ 0xc39ab482L, 0x5e9e14a4L, 0x2be065f0L, 0x2a13fc3aL, 0x9052e8ecL,
     /* 255*/ 0xaf6f5afcL
     /* End   of S Box 14  */},

    {/* Start of S Box 15  */

     /*   0*/ 0x519aa8b5L, 0xbb303da9L, 0xe00e2b10L, 0xdfa6c1dbL, 0x2e6b952eL,
     /*   5*/ 0xee10dc23L, 0x37936d09L, 0x1fc42e92L, 0x39b25a9fL, 0x13ff89f4L,
     /*  10*/ 0xc8f53feaL, 0x18500bc7L, 0x95a0379dL, 0x98f751c2L, 0x2289c42fL,
     /*  15*/ 0xa21e4098L, 0x6f391f41L, 0xf27e7e58L, 0x0d0df887L, 0x4b79d540L,
     /*  20*/ 0x8e8409aaL, 0x71fe46f8L, 0x688a9b29L, 0x3f08b548L, 0x84abe03aL,
     /*  25*/ 0x5e91b6c1L, 0xfde4c2aeL, 0x251d0e72L, 0x92d4fee5L, 0xf9371967L,
     /*  30*/ 0x9175108fL, 0xe6e81835L, 0x8c8cb8eeL, 0xb55a67b3L, 0xcef138ccL,
     /*  35*/ 0x8b256268L, 0x00d815f5L, 0xe8810812L, 0x77826189L, 0xea73267dL,
     /*  40*/ 0x19b90f8dL, 0x45c33bb4L, 0x82477056L, 0xe1770075L, 0x09467aa6L,
     /*  45*/ 0xa7c6f54aL, 0x79768742L, 0x61b86bcaL, 0xd6644a44L, 0xe33f0171L,
     /*  50*/ 0xc229fbcdL, 0x41b08febL, 0xd1903e30L, 0x65ec9080L, 0x563d6fbdL,
     /*  55*/ 0xf56da488L, 0xebf64cd8L, 0x4934426bL, 0x7c8592fcL, 0x6aca8cf2L,
     /*  60*/ 0x1cea111bL, 0x3a57ee7aL, 0xace11c0dL, 0x9942d85eL, 0xc4613407L,
     /*  65*/ 0xfa8e643bL, 0x327fc701L, 0x4ca9be82L, 0x3352526dL, 0x2c047f63L,
     /*  70*/ 0xf3a8f7ddL, 0x1a4a98a8L, 0x762ed4d1L, 0x27c75008L, 0xbdf497c0L,
     /*  75*/ 0x7a7b84dfL, 0x315c28abL, 0x801f93e3L, 0xf19b0ca1L, 0x8f14e46aL,
     /*  80*/ 0xe48ba333L, 0x9605e625L, 0xf03ecb60L, 0x60385f2dL, 0x902845baL,
     /*  85*/ 0x7f96d66fL, 0x24bff05cL, 0x2820730bL, 0x947133cbL, 0xd444828aL,
     /*  90*/ 0xb343f6f1L, 0x0bef4705L, 0x8da574f9L, 0x01e25d6cL, 0x1732793eL,
     /*  95*/ 0x4f0f7b27L, 0x364b7117L, 0xb2d1da77L, 0xa6c5f1e9L, 0x574ca5b1L,
     /* 100*/ 0x386a3076L, 0xad6894d6L, 0x1156d7faL, 0xa48d1d9aL, 0x4794c0afL,
     /* 105*/ 0x150c0aa0L, 0x26d348acL, 0x29fdeabeL, 0xa5dede53L, 0x81671e8eL,
     /* 110*/ 0x594ee3bfL, 0xa96c56e6L, 0x3426a726L, 0xc5976579L, 0xbc22e5e4L,
     /* 115*/ 0xc1006319L, 0xdaafdd2aL, 0xa1a1aa83L, 0x3badd0e7L, 0xc3b14981L,
     /* 120*/ 0xd770b155L, 0xccd7c693L, 0x42e944c5L, 0x03e0064fL, 0xca95b4efL,
     /* 125*/ 0x3dee81c3L, 0xfbbcd98cL, 0x1e07e15bL, 0x667ce949L, 0xe7d6773fL,
     /* 130*/ 0x21b6124bL, 0x6b2a6ef7L, 0xd3278a9cL, 0x9a988304L, 0x75d2ae9bL,
     /* 135*/ 0xfe49e2ffL, 0x9bc24f46L, 0x74cc2cf6L, 0xa3139f36L, 0x6c9ef35aL,
     /* 140*/ 0x9fc1dffeL, 0x9e5facdcL, 0xaadc8bbbL, 0x5abdbc5fL, 0x44b3b390L,
     /* 145*/ 0xf754efa7L, 0x5fe3bdb7L, 0x4e59c886L, 0x06a4c984L, 0xa0338878L,
     /* 150*/ 0xcd513cd7L, 0x63ebd27eL, 0x8aba80adL, 0x50da144eL, 0x5d9f4e97L,
     /* 155*/ 0x025b751cL, 0x2d580200L, 0xb6c05837L, 0x580aa15dL, 0x54022a6eL,
     /* 160*/ 0xb41a5415L, 0x4863fab6L, 0xb0b79957L, 0x46d0d159L, 0xdc2b8650L,
     /* 165*/ 0x20a7bb0cL, 0x4a032974L, 0xec8636a2L, 0x8548f24cL, 0xf6a2bf16L,
     /* 170*/ 0x1088f4b0L, 0x0c2f3a94L, 0x525dc396L, 0x14065785L, 0x2b4dca52L,
     /* 175*/ 0x08aeed39L, 0xabedfc99L, 0xb1dbcf18L, 0x87f85bbcL, 0xae3aff61L,
     /* 180*/ 0x433ccd70L, 0x5b23cc64L, 0x7b453213L, 0x5355c545L, 0x9318ec0aL,
     /* 185*/ 0x78692d31L, 0x0a21693dL, 0xd5666814L, 0x05fb59d9L, 0xc71985b2L,
     /* 190*/ 0x2abb8e0eL, 0xcf6e6c91L, 0xd9cfe7c6L, 0xefe7132cL, 0x9711ab28L,
     /* 195*/ 0x3ce52732L, 0x12d516d2L, 0x7209a0d0L, 0xd278d306L, 0x70fa4b7bL,
     /* 200*/ 0x1d407dd3L, 0xdb0beba4L, 0xbfd97621L, 0xa8be21e1L, 0x1b6f1b66L,
     /* 205*/ 0x30650ddaL, 0xba7ddbb9L, 0x7df953fbL, 0x9d1c3902L, 0xedf0e8d5L,
     /* 210*/ 0xb8741ae0L, 0x0f240565L, 0x62cd438bL, 0xc616a924L, 0xaf7a96a3L,
     /* 215*/ 0x35365538L, 0xe583af4dL, 0x73415eb8L, 0x23176a47L, 0xfc9ccee8L,
     /* 220*/ 0x7efc9de2L, 0x695e03cfL, 0xf8ce66d4L, 0x88b4781dL, 0x67dd9c03L,
     /* 225*/ 0x3e8f9e73L, 0xc0c95c51L, 0xbe314d22L, 0x55aa0795L, 0xcb1bb011L,
     /* 230*/ 0xe980fdc8L, 0x9c62b7ceL, 0xde2d239eL, 0x042cadf3L, 0xffdf04deL,
     /* 235*/ 0x5ce6a60fL, 0xd8c831edL, 0xb7b5b9ecL, 0xb9cbf962L, 0xe253b254L,
     /* 240*/ 0x0735ba1fL, 0x16ac917fL, 0xdd607c2bL, 0x64a335c4L, 0x40159a7cL,
     /* 245*/ 0x869222f0L, 0x6ef21769L, 0x839d20a5L, 0xd03b24c9L, 0xf412601eL,
     /* 250*/ 0x6d72a243L, 0x0e018dfdL, 0x89f3721aL, 0xc94f4134L, 0x2f992f20L,
     /* 255*/ 0x4d87253cL
     /* End   of S Box 15  */}};

/*
 * The following routine is a simple error exit routine  -- it prints a
 * message and aborts
 */
void ErrAbort(char *s)
{
    fprintf(stderr, "%s\n", s);
    exit(1);
}

/*
 * The following routine converts a byte array to an array of word32
 * int.  It is primarily intended to eliminate the byte-ordering problem.
 * VAXes order the bytes in a character array differently than SUN's do. This
 * routine should be portable across different computer architectures.
 * However, it is not very efficient.
 */
void ConvertChunkOfBytes(char charBuffer[], word32 wordBuffer[])
{
    int i;
    word32 t0, t1, t2, t3;

    for (i = 0; i < CHUNK_SIZE; i++)
    {
        t0 = charBuffer[4 * i];
        t1 = charBuffer[4 * i + 1];
        t2 = charBuffer[4 * i + 2];
        t3 = charBuffer[4 * i + 3];
        t0 &= 0xffL;
        t1 &= 0xffL;
        t2 &= 0xffL;
        t3 &= 0xffL;
        wordBuffer[i] = (t0 << 24) | (t1 << 16) | (t2 << 8) | t3;
    }
}

/*
 * The following routine trys to read 4*"CHUNK_SIZE" bytes from the input
 * file. It will only return a non-full buffer if an EOF is encountered.
 *
 * It returns the number of bytes actually read.  If there are any errors, it
 * aborts.  If this routine cannot read all the bytes it's supposed to, it
 * pads the output array, "buf", with trailing 0 bytes.
 */
int ReadChunk(word32 buf[])
{
    char charBuf[CHUNK_SIZE * 4];
    int byteCount;
    int i;

    byteCount = fread(charBuf, 1, CHUNK_SIZE * 4, stdin);
    printf("Read %d bytes: ", byteCount);
    for (int j = 0; j < byteCount; j++)
    {
        printf("%02x ", (unsigned char)charBuf[j]);
    }
    printf("\n");

    if (byteCount < 0)
        ErrAbort("error on read");

    for (i = byteCount; i < CHUNK_SIZE * 4; i++)
        charBuf[i] = 0;

    ConvertChunkOfBytes(charBuf, buf);
    return byteCount;
}

/*
 * HashN is a conceptually simpler and more general version of Hash512.
 * It accepts an input of
 * INPUT_BLOCK_SIZE 32-bit words and produces an output of
 * OUTPUT_BLOCK_SIZE 32-bit words.  The INPUT_BLOCK_SIZE must be at
 * least two words larger than the output, or a serious degradation
 * in security will occur.  In addition, the use of outputs less
 * than 128 bits will often significantly reduce security.  While
 * possible, it requires great caution.
 */
void
    HashN(output, input)
        word32 output[OUTPUT_BLOCK_SIZE];
word32 input[INPUT_BLOCK_SIZE];
{
    static int shiftTable[4] = {16, 8, 16, 24};
    /* the array of data being hashed  */
    word32 block[INPUT_BLOCK_SIZE];
    word32 SBoxEntry; /* just a temporary */
    int shift;
    int i;
    int index;
    int next, last;
    int byteInWord;

    /* initialize the block to be encrypted from the input  */
    for (i = 0; i < INPUT_BLOCK_SIZE; i++)
        block[i] = input[i];

    for (index = 0; index < SECURITY_LEVEL; index++)
    {
        for (byteInWord = 0; byteInWord < 4; byteInWord++)
        {
            for (i = 0; i < INPUT_BLOCK_SIZE; i++)
            {
                /* compute i+1 and i-1 mod INPUT_BLOCK_SIZE */
                next = (i + 1) & MASK;
                last = (i + MASK) & MASK;
                /* Load an entry from the S-box  */
                SBoxEntry = standardSBoxes
                    [2 * index + ((i / 2) & 1)]
                    [block[i] & 0xffL];
                /*
                 * and XOR that entry with the preceding and
                 * following words
                 */
                block[next] ^= SBoxEntry;
                block[last] ^= SBoxEntry;
            };
            /*
             * Rotate right all 32-bit words in the entire block
             * at once.
             */
            shift = shiftTable[byteInWord];
            for (i = 0; i < INPUT_BLOCK_SIZE; i++)
                block[i] = (block[i] >> shift) |
                           (block[i] << (32 - shift));

        }; /* end of byteInWord going from 0 to 3 */
    }; /* end of index going from 0 to
        * SECURITY_LEVEL-1 */

    for (i = 0; i < OUTPUT_BLOCK_SIZE; i++)
        output[i] = input[i] ^ block[MASK - i];
};

/*
 * Hash512 is a more efficient and specialized version of HashN.
 * It accepts an input of INPUT_BLOCK_SIZE 32-bit words and
 * produces an output of
 * OUTPUT_BLOCK_SIZE 32-bit words.  The INPUT_BLOCK_SIZE must be at
 * least two words larger than the output, or a serious degradation
 * in security will occur.  In addition, the use of outputs less
 * than 128 bits will often significantly reduce security.  While
 * possible, it requires great caution.
 */
void
    Hash512(output, input)
        word32 output[OUTPUT_BLOCK_SIZE];
word32 input[INPUT_BLOCK_SIZE];
{
    static int shiftTable[4] = {16, 8, 16, 24};
    /* the array of data being hashed  */
    word32 block[INPUT_BLOCK_SIZE];
    word32 SBE; /* just a temporary */
    int shift, leftShift;
    int i;
    int index;
    int next, last;
    int byteInWord;
    word32 *SBox0;
    word32 *SBox1;
    word32 B00, B01, B02, B03, B04, B05, B06, B07, B08, B09, B10, B11, B12, B13, B14, B15;

    /* initialize the block to be encrypted from the input  */
    B00 = input[0];
    B01 = input[1];
    B02 = input[2];
    B03 = input[3];
    B04 = input[4];
    B05 = input[5];
    B06 = input[6];
    B07 = input[7];
    B08 = input[8];
    B09 = input[9];
    B10 = input[10];
    B11 = input[11];
    B12 = input[12];
    B13 = input[13];
    B14 = input[14];
    B15 = input[15];

    for (index = 0; index < SECURITY_LEVEL; index++)
    {
        SBox0 = standardSBoxes[2 * index + 0];
        SBox1 = standardSBoxes[2 * index + 1];
        for (byteInWord = 0; byteInWord < 4; byteInWord++)
        {
            round(B15, B00, B01, SBox0);
            round(B00, B01, B02, SBox0);
            round(B01, B02, B03, SBox1);
            round(B02, B03, B04, SBox1);
            round(B03, B04, B05, SBox0);
            round(B04, B05, B06, SBox0);
            round(B05, B06, B07, SBox1);
            round(B06, B07, B08, SBox1);
            round(B07, B08, B09, SBox0);
            round(B08, B09, B10, SBox0);
            round(B09, B10, B11, SBox1);
            round(B10, B11, B12, SBox1);
            round(B11, B12, B13, SBox0);
            round(B12, B13, B14, SBox0);
            round(B13, B14, B15, SBox1);
            round(B14, B15, B00, SBox1);
            /*
             * Rotate right all 32-bit words in the entire block
             * at once.
             */
            shift = shiftTable[byteInWord];
            leftShift = 32 - shift;
            rotate(B00);
            rotate(B01);
            rotate(B02);
            rotate(B03);
            rotate(B04);
            rotate(B05);
            rotate(B06);
            rotate(B07);
            rotate(B08);
            rotate(B09);
            rotate(B10);
            rotate(B11);
            rotate(B12);
            rotate(B13);
            rotate(B14);
            rotate(B15);
        }; /* end of byteInWord going from 0 to 3 */
    }; /* end of index going from 0 to
        * SECURITY_LEVEL-1 */
    output[0] = input[0] ^ B15;
    output[1] = input[1] ^ B14;
    output[2] = input[2] ^ B13;
    output[3] = input[3] ^ B12;
    if (OUTPUT_BLOCK_SIZE == 4)
        return;
    output[4] = input[4] ^ B11;
    output[5] = input[5] ^ B10;
    output[6] = input[6] ^ B09;
    output[7] = input[7] ^ B08;
    if (OUTPUT_BLOCK_SIZE == 8)
        return;

    ErrAbort("Bad value for OUTPUT_BLOCK_SIZE");
};

/*
 * This routine increments a 64-bit counter by the given increment.
 */
void Increment64BitCounter(word32 counter[], long int increment)
{
    word32 maxInt = 0xffffffffL;

    if ((long)(maxInt - counter[1]) < increment)
    {
        if (counter[0] == maxInt)
            ErrAbort("64-bit counter overflowed");
        counter[0]++;
        counter[1] = maxInt - counter[1];
        counter[1] = increment - counter[1];
    }
    else
    {
        counter[1] += increment;
    }
}

/*
 * The main program reads the input, hashes it, and prints the result.
 *
 * The basic idea is simple.  As an example, if H is the hash function that
 * produces 128-bit outputs, and if we pick an input string that is 3
 * "chunks" long then we are computing:
 *
 * output = H( H(  H(  H( 0 || chunk[0])  || chunk[1])
 *                          || chunk[2])  || bit-length)
 *
 * "bit-length" is a "chunk" sized field into which has been put the length of
 * the input, in bits, right justified.  Note that the size of a "chunk" is
 * just the input size minus the output size (typically 48 bytes or 12
 * words).
 *
 * "0" is a vector of 0 bits of the same size (in bits) as the output of H
 * (i.e., typically 128 bits).
 *
 * "||" is the concatenation operator, and is used to concatenate the output
 * field of the preceding computation of H with the next "chunk" of bits from
 * the input.
 *
 * "chunk" is an array which holds the input in words.  The final element of the
 * array is left justified and zero-filled on the right.
 *
 */
int main()
{
    int i;
    word32 hash[INPUT_BLOCK_SIZE];
    word32 bitCount[2]; /* the 64-bit count of the number of
                         * bits in the input */
    long int byteCount; /* the count of the number of bytes we just
                         * read */

    /* Test for various error conditions and logic problems  */
    if (SECURITY_LEVEL * 2 > MAX_SBOX_COUNT)
        ErrAbort("Too few S-boxes for specified SECURITY_LEVEL");
    if (OUTPUT_BLOCK_SIZE < 4)
        ErrAbort("OUTPUT_BLOCK_SIZE too small");
    if ((INPUT_BLOCK_SIZE & MASK) != 0)
        ErrAbort("logic error, INPUT_BLOCK_SIZE not a power of 2");
    if ((INPUT_BLOCK_SIZE % 4) != 0)
        ErrAbort("logic error, INPUT_BLOCK_SIZE not a multiple of 4");
    if (OUTPUT_BLOCK_SIZE > INPUT_BLOCK_SIZE - 2)
        ErrAbort("logic error, OUTPUT_BLOCK_SIZE is too big");
    if (CHUNK_SIZE < 2)
        ErrAbort("logic error, CHUNK_SIZE is too small");

    /*
     * The error condtions have now been checked -- everything should
     * work smoothly
     */
    bitCount[0] = 0;
    bitCount[1] = 0;
    for (i = 0; i < INPUT_BLOCK_SIZE; i++)
        hash[i] = 0; /* initialize hash  */
    /*
     * Hash each chunk in the input (either 48 byte chunks or 32 byte
     * chunks)  -- and keep the result in hash.  Note that the first 16
     * (32) bytes of hash holds the output of the previous hash
     * computation done during the previous iteration of the loop
     */
    do
    {
        /* Get the next chunk */
        byteCount = ReadChunk(&hash[OUTPUT_BLOCK_SIZE]);
        Increment64BitCounter(bitCount, 8 * byteCount);
        /* hash in the block we just read  */
        if (byteCount > 0)
            Hash512(hash, hash);
    } while (byteCount > 0); /* end of while */

    /*
     * Put the 64-bit bit-count into the final 64-bits of the block about
     * to be hashed
     */
    hash[INPUT_BLOCK_SIZE - 2] = bitCount[0]; /* upper 32 bits of
                                               * count */
    hash[INPUT_BLOCK_SIZE - 1] = bitCount[1]; /* lower 32 bits of
                                               * count */
    /* Final hash down.  */
    Hash512(hash, hash);

    /*
     * the first OUTPUT_BLOCK_SIZE words of "hash" now hold the hashed
     * result, which is printed on standard output
     */
    for (i = 0; i < OUTPUT_BLOCK_SIZE; i++)
        printf(" %08lx", hash[i]);
    /*
     * Note that if the user wishes to view the output as a sequence
     * of bytes, then the byte order is the same as the order
     * in which the bytes are printed by "printf" above.  The
     * first byte (designated byte 0) is the left-most byte
     * printed by "printf" above.  The last byte (designated
     * byte 15) is the right-most byte printed.
     * This can also be viewed as:
     *
     * the first byte is the most significant byte of hash[0],
     * the second byte is the second most significant byte of hash[0],
     * the third byte is the third most significant byte of hash[0],
     * the fourth byte is the least significant byte of hash[0],
     * the fifth byte is the most significant byte of hash[1],
     * etc.  This process continues until the last byte is reached.
     * The last byte is the least significant byte of hash[3].
     *
     * This is basically "big-endian" or network byte order.
     *
     * Although the use of the full 128 bits of output is recommended,
     * in some applications it will be both useful and safe to use
     * a smaller output.  From a purely technical point of view, which
     * bytes are retained and which are discarded is not an issue
     * of any great significance.  If there is any issue of standardization
     * in the particular application, then the bytes that should be
     * retained are the left-most bytes printed out by "printf" above, and
     * the bytes that are to be discarded are the right-most bytes
     * printed out by "printf" above.  That is, the most significant
     * (left most, lower numbered) bytes are retained, while the
     * least significant (right most, higher numbered) bytes are discarded.
     *
     * When the output size is other than 128 bits, the above comments
     * should be extended in the obvious fashion.
     */
    printf("\n");
    exit(0);
}