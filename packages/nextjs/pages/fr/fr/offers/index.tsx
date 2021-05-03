import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllOffers } from "../../../../server";

const LocalOffers: NextPage = () => {
  const [offers, setOffers] = useState<any>([]);
  useEffect(() => {
    getAllOffers().then((res) => {
      setOffers(res);
    });
  }, []);
  if (!offers.length) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {offers.map((o) => (
        <li>
          <Link href={`/fr/fr/offers/${o.slug}`} passHref>
            <a>{o.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LocalOffers;
