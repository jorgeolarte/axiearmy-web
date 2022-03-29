import Table from "./Table.compound";
import useTrainers from "@/hooks/use-trainers.hook";
import TableSkeleton from "./Table.skeleton";

export default function TrainersTable() {
  const { isLoading, trainers } = useTrainers();

  if (isLoading) {
    return (
      <div className='max-w-full overflow-x-auto p-5'>
        {[...Array(20).keys()].map((index) => (
          <TableSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className='max-w-full overflow-x-auto p-5'>
      <Table>
        <Table.Head>
          <Table.TrHead>
            <Table.Td>#</Table.Td>
            <Table.Td>Trainers</Table.Td>
            <Table.Td hidden={true}>Team</Table.Td>
            <Table.Td>SLP</Table.Td>
            <Table.Td hidden={true}>Avg</Table.Td>
            <Table.Td>Cups</Table.Td>
            <Table.Td>Rank</Table.Td>
          </Table.TrHead>
        </Table.Head>
        <Table.Body>
          {trainers.map((trainer, index) => (
            <Table.Tr ronin={trainer.ronin} key={trainer.ronin}>
              <Table.Td>
                <Table.Image
                  picUrl={trainer.profileFilename}
                  name={trainer.name}
                  position={index + 1}
                />
              </Table.Td>
              <Table.Td>{trainer.name}</Table.Td>
              <Table.Td hidden={true}>{trainer.team}</Table.Td>
              <Table.Td>{trainer.slp}</Table.Td>
              <Table.Td hidden={true}>{trainer.avg}</Table.Td>
              <Table.Td>{trainer.cups}</Table.Td>
              <Table.Td>{trainer.rank}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
