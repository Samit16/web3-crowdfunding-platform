import React, { useContext, createContext } from 'react';

import { createThirdwebClient, getContract } from "thirdweb";
import { useActiveAccount, useConnect } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";
import {createWallet} from "thirdweb/wallets";
import {inAppWallet} from "thirdweb/wallets";
import {prepareContractCall, sendTransaction} from "thirdweb";
import {readContract} from "thirdweb";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  console.log("Provider mounted");

  return (
    <StateContext.Provider
      value={{
        address: null,
        connect: () => console.log("clicked"),
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// const account = useActiveAccount();
// const address = account?.address;

// const { connect } = useConnect();

// const connectWallet = async () => {
//   try {
//     const wallet = createWallet("io.metamask");

//     await wallet.connect({ client });

//     await connect(wallet);

//     console.log("Connected:", wallet);
//   } catch (error) {
//     console.error("Wallet connection failed:", error);
//   }
// };

// const publishCampaign = async (form) => {
//   try {
//     const transaction = prepareContractCall({
//       contract,
//       method:
//         "function createCampaign(address _owner, string _title, string _description, uint256 _target, uint256 _deadline, string _image)",
//       params: [
//         address,
//         form.title,
//         form.description,
//         BigInt(form.target),
//         BigInt(new Date(form.deadline).getTime() / 1000),
//         form.image,
//       ],
//     });

//     const receipt = await sendTransaction({
//       transaction,
//       account,
//     });

//     console.log("Campaign created:", receipt);
//   } catch (error) {
//     console.error("Campaign creation failed:", error);
//   }
// }

//   const getCampaigns = async () => {
//   try {
//     const campaigns = await readContract({
//       contract,
//       method:
//         "function getCampaigns() view returns ((address owner, string title, string description, uint256 target, uint256 deadline, uint256 amountCollected, string image, address[] donators, uint256[] donations)[])",
//       params: [],
//     });

//     const parsedCampaigns = campaigns.map((campaign, i) => ({
//       owner: campaign.owner,
//       title: campaign.title,
//       description: campaign.description,
//       target: campaign.target.toString(),
//       deadline: Number(campaign.deadline),
//       amountCollected: campaign.amountCollected.toString(),
//       image: campaign.image,
//       pId: i,
//     }));

//     return parsedCampaigns;
//   } catch (error) {
//     console.error("Failed to fetch campaigns:", error);
//     return [];
//   }
// }

//   const getUserCampaigns = async () => {
//     const allCampaigns = await getCampaigns();

//     const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);

//     return filteredCampaigns;
//   }

//   const donate = async (pId, amount) => {
//   try {
//     const transaction = prepareContractCall({
//       contract,
//       method: "function donateToCampaign(uint256 _id) payable",
//       params: [BigInt(pId)],
//       value: BigInt(amount),
//     });

//     const receipt = await sendTransaction({
//       transaction,
//       account,
//     });

//     return receipt;
//   } catch (error) {
//     console.error("Donation failed:", error);
//   }
// };

//   const getDonations = async (pId) => {
//   try {
//     const donations = await readContract({
//       contract,
//       method: "function getDonators(uint256 _id) view returns (address[] memory, uint256[] memory)",
//       params: [BigInt(pId)],
//     });

//     const parsedDonations = [];

//     for (let i = 0; i < donations[0].length; i++) {
//       parsedDonations.push({
//         donator: donations[0][i],
//         donation: donations[1][i].toString(),
//       });
//     }

//     return parsedDonations;
//   } catch (error) {
//     console.error("Failed to fetch donations:", error);
//     return [];
//   }
// };

// return (
//     <StateContext.Provider
//     value={{ 
//         address,
//         contract,
//         connect: connectWallet,
//         createCampaign: publishCampaign,
//         getCampaigns,
//         getUserCampaigns,
//         donate,
//         getDonations
//         }}>
//     {children}
//     </StateContext.Provider>
//   )
// }

export const useStateContext = () => useContext(StateContext);