import { Beer } from '@/types';
import beersData from '@/data/beers.json';

interface MatchCriteria {
  flavor?: string;
  body?: string;
  pairing?: string;
  abv?: string;
}

export function findMatchingBeers(criteria: MatchCriteria): Beer[] {
  const beers = beersData as Beer[];
  let scores = beers.map((beer) => ({ beer, score: 0 }));

  // Flavor matching
  if (criteria.flavor) {
    scores = scores.map(({ beer, score }) => {
      let newScore = score;
      if (criteria.flavor === 'hoppy' && beer.style.toLowerCase().includes('ipa')) {
        newScore += 3;
      } else if (criteria.flavor === 'hoppy' && beer.ibu && beer.ibu > 40) {
        newScore += 2;
      } else if (
        criteria.flavor === 'malty' &&
        ['lager', 'amber', 'brown'].some((s) => beer.style.toLowerCase().includes(s))
      ) {
        newScore += 3;
      } else if (
        criteria.flavor === 'fruity' &&
        ['wheat', 'sour', 'belgian'].some((s) => beer.style.toLowerCase().includes(s))
      ) {
        newScore += 3;
      } else if (
        criteria.flavor === 'roasted' &&
        ['stout', 'porter'].some((s) => beer.style.toLowerCase().includes(s))
      ) {
        newScore += 3;
      }
      return { beer, score: newScore };
    });
  }

  // Body matching
  if (criteria.body) {
    scores = scores.map(({ beer, score }) => {
      let newScore = score;
      if (
        criteria.body === 'light' &&
        ['wheat', 'lager', 'pale'].some((s) => beer.style.toLowerCase().includes(s))
      ) {
        newScore += 2;
      } else if (
        criteria.body === 'medium' &&
        ['pale ale', 'amber'].some((s) => beer.style.toLowerCase().includes(s))
      ) {
        newScore += 2;
      } else if (
        criteria.body === 'full' &&
        ['stout', 'porter', 'imperial'].some((s) => beer.style.toLowerCase().includes(s))
      ) {
        newScore += 2;
      }
      return { beer, score: newScore };
    });
  }

  // Food pairing matching
  if (criteria.pairing) {
    scores = scores.map(({ beer, score }) => {
      let newScore = score;
      if (beer.foodPairings && criteria.pairing) {
        const pairingLower = criteria.pairing.toLowerCase();
        if (beer.foodPairings.some((p) => p.toLowerCase().includes(pairingLower))) {
          newScore += 3;
        }
      }
      return { beer, score: newScore };
    });
  }

  // ABV matching
  if (criteria.abv) {
    scores = scores.map(({ beer, score }) => {
      let newScore = score;
      if (criteria.abv === 'low' && beer.abv < 5) {
        newScore += 2;
      } else if (criteria.abv === 'medium' && beer.abv >= 5 && beer.abv <= 7) {
        newScore += 2;
      } else if (criteria.abv === 'high' && beer.abv > 7) {
        newScore += 2;
      }
      return { beer, score: newScore };
    });
  }

  // Sort by score and return top matches
  scores.sort((a, b) => b.score - a.score);

  // Return top 4 matches, or all beers if no criteria matched well
  const topMatches = scores.filter((s) => s.score > 0).slice(0, 4);
  return topMatches.length > 0 ? topMatches.map((s) => s.beer) : beers.slice(0, 4);
}
