import alan from "./images/Alan-Keane.webp";
import anais from "./images/Anais-Errrrrr-Watterson.webp";
import carmen from "./images/Carmen-Verde.webp";
import carrie from "./images/Carrie-Krueger.webp";
import darwin from "./images/Darwin-Raglan-Caspian-Ahab-Poseidon-Nicodemus-Watterson-III.webp";
import nicole from "./images/Doctor-Nicole-Watterson.webp";
import gumball from "./images/Gumball-Tristopher-Watterson.webp";
import bananajoe from "./images/Joseph-A.-Banana.webp";
import leslie from "./images/Leslie.webp";
import penny from "./images/Penny-Fitzgerald.webp";
import richard from "./images/Richard-Buckley-Watterson.webp";
import tobias from "./images/Tobias-Wilson.webp";

const GetCards = () => {
  const alanCard = {
    src: alan,
    name: "Alan Keane",
  };
  const anaisCard = {
    src: anais,
    name: "Anais Errrrrr Watterson",
  };
  const carmenCard = {
    src: carmen,
    name: "Carmen Verde",
  };
  const carrieCard = {
    src: carrie,
    name: "Carrie Krueger",
  };
  const darwinCard = {
    src: darwin,
    name: "Darwin Raglan Caspian Ahab Poseidon Nicodemus Watterson III",
  };
  const nicoleCard = {
    src: nicole,
    name: "Doctor Nicole Watterson",
  };
  const gumballCard = {
    src: gumball,
    name: "Gumball Tristopher Watterson",
  };
  const bananajoeCard = {
    src: bananajoe,
    name: "Joseph A. Banana",
  };
  const leslieCard = {
    src: leslie,
    name: "Leslie",
  };
  const pennyCard = {
    src: penny,
    name: "Penny Fitzgerald",
  };
  const richardCard = {
    src: richard,
    name: "Richard Buckley Watterson",
  };
  const tobiasCard = {
    src: tobias,
    name: "Tobias Wilson",
  };

  const cardArray = [
    alanCard,
    anaisCard,
    carmenCard,
    carrieCard,
    darwinCard,
    nicoleCard,
    gumballCard,
    bananajoeCard,
    leslieCard,
    pennyCard,
    richardCard,
    tobiasCard,
  ];
  /*     cardArray.push(alanCard);
    cardArray.concat(anaisCard);
    cardArray.concat(carmenCard);
    cardArray.concat(carrieCard);
    cardArray.concat(darwinCard);
    cardArray.concat(nicoleCard);
    cardArray.concat(gumballCard);
    cardArray.concat(bananajoeCard);
    cardArray.concat(leslieCard);
    cardArray.concat(pennyCard);
    cardArray.concat(richardCard);
    cardArray.concat(tobiasCard); */
  return cardArray;
};

export default GetCards;
