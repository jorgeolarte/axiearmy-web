import Button from "./Button.compound";

export default function Options() {
  return (
    <Button>
      <Button.Item type='default'>15 días</Button.Item>
      <Button.Item type='before'>1 mes</Button.Item>
      <Button.Item type='first'>2 meses</Button.Item>
    </Button>
  );
}
