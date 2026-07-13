// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Crowdfunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint deadline;
        uint amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
        
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(){
        
    }
    function donateToCampaign(){

    }
    function getDonators(){

    }
    function getCampaigns(){

    }
    
}
