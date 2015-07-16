/**
 * @license
 * Copyright 2015 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Provides constants used throughout E2EMail.
 * @author yzhu@yahoo-inc.com (Yan Zhu)
 */

goog.provide('e2e.openpgp.pgpmime.Constants');


/**
 * MIME string constants
 * @enum {string}
 */
e2e.openpgp.pgpmime.Constants.Mime = {
  // Separators
  CRLF: '\r\n',
  WHITESPACE: ' ',

  // Header names
  CONTENT_TYPE: 'Content-Type',
  CONTENT_TRANSFER_ENCODING: 'Content-Transfer-Encoding',
  MIME_VERSION: 'Mime-Version',
  CONTENT_DISPOSITION: 'Content-Disposition',
  CONTENT_DESCRIPTION: 'Content-Description',
  SUBJECT: 'Subject',
  TO: 'To',
  FROM: 'From',
  IN_REPLY_TO: 'In-Reply-To',

  // OpenPGP version content field. Required by RFC 3156.
  VERSION_CONTENT: 'Version: 1',

  // General Content Types. Case-insensitive.
  PLAINTEXT: 'text/plain',
  MULTIPART_ENCRYPTED: 'multipart/encrypted',
  ENCRYPTED: 'application/pgp-encrypted',
  ENCRYPTED_WITH_NAME: 'application/pgp-encrypted; name="version.asc"',
  OCTET_STREAM: 'application/octet-stream',
  MULTIPART_MIXED: 'multipart/mixed',
  DEFAULT_ENCRYPTED_CONTENT_TYPE:
      'multipart/encrypted; protocol="application/pgp-encrypted"',
  NAME: 'name',

  // Image specific Content Types. Case-insensitive.
  IMAGE_GIF: 'image/gif',
  IMAGE_JPEG: 'image/jpeg',
  IMAGE_JPG: 'image/jpg',
  IMAGE_PNG: 'image/png',
  IMAGE_BMP: 'image/bmp',
  IMAGE_WEBP: 'image/webp',
  IMAGE_PJPEG: 'image/pjpeg',
  IMAGE_TIFF: 'image/tiff',
  IMAGE_SVG_XML: 'image/svg+xml',
  IMAGE_VND_DJVU: 'image/vnd.djvu',

  // Content Transfer Encodings
  SEVEN_BIT: '7bit',
  QUOTED_PRINTABLE: 'quoted_printable',
  BASE64: 'base64',
  EIGHT_BIT: '8bit',
  BINARY: 'binary',

  // Content dispositions
  ATTACHMENT: 'attachment',

  // Charset. Case-insensitive.
  UTF8: 'utf-8',
  ASCII: 'us-ascii',

  //Miscellanous values
  MIME_VERSION_NUMBER: '1.0',
  PGP_MIME_DESCRIPTION: 'PGP/MIME Versions Identification',
  ENCRYPTED_ASC: 'encrypted.asc',
  VERSION_ASC: 'version.asc'
};


/**
 * MIME number constants
 * @enum {number}
 */
e2e.openpgp.pgpmime.Constants.MimeNum = {
  LINE_WRAP: 64
};


/**
 * MIME array constants
 * @enum {Array}
 */
e2e.openpgp.pgpmime.Constants.MimeArray = {
  IMAGE_TYPES: [e2e.openpgp.pgpmime.Constants.Mime.IMAGE_GIF,
                e2e.openpgp.pgpmime.Constants.Mime.IMAGE_JPEG,
                e2e.openpgp.pgpmime.Constants.Mime.IMAGE_JPG,
                e2e.openpgp.pgpmime.Constants.Mime.IMAGE_PNG,
                e2e.openpgp.pgpmime.Constants.Mime.IMAGE_BMP,
                e2e.openpgp.pgpmime.Constants.Mime.IMAGE_WEBP,
                e2e.openpgp.pgpmime.Constants.Mime.IMAGE_PJPEG,
                e2e.openpgp.pgpmime.Constants.Mime.IMAGE_TIFF,
                e2e.openpgp.pgpmime.Constants.Mime.IMAGE_SVG_XML,
                e2e.openpgp.pgpmime.Constants.Mime.IMAGE_VND_DJVU]
};
