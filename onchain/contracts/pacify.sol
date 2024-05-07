// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Pacific is ERC721URIStorage {
    uint256 private _nextTokenId;

    constructor() ERC721("Pacify", "Pacific") {}

    //This function is for minting the certificate as an NFT
    function mintCert(
        address recipient,
        string memory tokenURI
    ) public returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }

    //This function is fo transferring the certificate to another address
    function transferCert(address from, address to, uint256 tokenId) public {
        safeTransferFrom(from, to, tokenId);
    }

    function searchCert(uint256 tokenId) public view returns (string memory) {
        return tokenURI(tokenId);
    }
}
