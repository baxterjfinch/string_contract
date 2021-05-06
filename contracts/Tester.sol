// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Tester {
  address public currentAddr;
  uint256 public currentInt;
  string public sym;

  function setOnlyStringBefore(string memory _sym, address new_addr, uint256 new_int) public {
    currentAddr = new_addr;
    currentInt = new_int;
    sym = _sym;
  }

  function setOnlyStringAfter(address new_addr, uint256 new_int, string memory _sym) public {
    currentAddr = new_addr;
    currentInt = new_int;
    sym = _sym;
  }

  function setOnlyAddrAndInt(address new_addr, uint256 new_int) public {
    currentAddr = new_addr;
    currentInt = new_int;
  }
}
