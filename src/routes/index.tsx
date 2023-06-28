import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>ჰოსტინგის პანელი</Title>
      <h1>ჩვენ განვაახლეთ პანელი და გადავედით ახალ ჰოსტზე!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="http://host.fraccom.infinityfreeapp.com" target="_blank">
          host.fraccom.com
        </a>{" "}
        რომ გაიარო ავტორიზაცია პანელზე.
      </p>
    </main>
  );
}
