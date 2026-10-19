import HomePage from "@/components/pages/HomePage/HomePage";
import { getServicesNameSlug } from "@/utils/getServiceNameSlug";

const services = getServicesNameSlug();

console.log("Services:", services);
export default function Page() {
  return <HomePage />
}
