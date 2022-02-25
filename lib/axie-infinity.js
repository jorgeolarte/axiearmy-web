export async function getAxiesByRonin(owner) {
  owner = owner.replace("ronin:", "0x");

  let query = `query GetAxieBriefList($owner: String) {
    axies(
      owner: $owner
    ) {
      total
      results {
        ...AxieBrief
        __typename
      }
      __typename
    }
  }
  
  fragment AxieBrief on Axie {
    id
    name
    stage
    class
    breedCount
    image
    title
    battleInfo {
      banned
      __typename
    }
    auction {
      currentPrice
      currentPriceUSD
      __typename
    }
    parts {
      id
      name
      class
      type
      specialGenes
      __typename
    }
    stats {
      ...AxieStats
      __typename
    }
    __typename
  }

  fragment AxieStats on AxieStats {
    hp
    speed
    skill
    morale
    __typename
  }`;

  let axies = await fetch("https://graphql-gateway.axieinfinity.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { owner },
    }),
  })
    .then((result) => result.json())
    .then((data) => data.data.axies);

  return axies;
}
