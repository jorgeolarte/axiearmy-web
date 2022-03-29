import Aside from "./Aside.compound";
import Comissions from "./Comissions.compound";
import useComissions from "@/hooks/use-comissions.hook";

export default function AsideBar() {
  const { isLoading, comissions } = useComissions();

  return (
    <>
      <Aside>
        <Aside.Nav>
          <Aside.Close />
          <Aside.Link href='/academy'>
            <Aside.Image src='tracker.svg' alt='Tracker' />
            <Aside.Text>Tracker</Aside.Text>
          </Aside.Link>
          <Aside.Link href='https://marketplace.axieinfinity.com/profile/ronin:e7032b0e24495ac798658967ce29c7a2ad4fab23/axie/'>
            <Aside.Image src='axies.svg' alt='Axies' />
            <Aside.Text>Axies</Aside.Text>
          </Aside.Link>
          <Aside.Link href='#'>
            <Aside.Image src='invoice.svg' alt='Facturas' />
            <Aside.Text>Facturas</Aside.Text>
          </Aside.Link>
        </Aside.Nav>
        {!isLoading ? (
          <Comissions>
            <Comissions.Title>Comisiones</Comissions.Title>
            {comissions.map((comission, index) => (
              <Comissions.Item key={index}>
                <div>
                  <Comissions.Level>{comission.level}</Comissions.Level>
                  <Comissions.Goal>{comission.goal} SLP</Comissions.Goal>
                </div>
                <Comissions.Percent position={index + 1}>
                  {comission.percent}%
                </Comissions.Percent>
              </Comissions.Item>
            ))}
          </Comissions>
        ) : (
          <></>
        )}
      </Aside>
    </>
  );
}
