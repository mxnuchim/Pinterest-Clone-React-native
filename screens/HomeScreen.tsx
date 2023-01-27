import PinsList from "../components/PinsList";
import pins from "../assets/data/pins";

export default function HomeScreen() {
  return <PinsList pins={pins} />;
}
