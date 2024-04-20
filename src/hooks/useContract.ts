import { useMemo } from "react";

import { AddressZero } from "@ethersproject/constants";
import { Provider } from "@ethersproject/providers";
import { Contract, ContractInterface, Signer } from "ethers";
import { isAddress } from "ethers/lib/utils";

import { useSignerOrProvider } from "./useSignerOrProvider";

function getContract<T = Contract>(address: string, abi: ContractInterface, provider: Signer | Provider) {
  return <T>(<unknown>new Contract(address, abi, provider));
}

export function useContract<Contract>(address: string, abi: ContractInterface) {
  const { provider, signer } = useSignerOrProvider();
  const signerOrProvider = signer ?? provider;

  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  const contract = useMemo(() => {
    if (signerOrProvider) {
      return getContract<Contract>(address, abi, signerOrProvider);
    }
    return undefined;
  }, [address, abi, signerOrProvider]);

  return contract;
}