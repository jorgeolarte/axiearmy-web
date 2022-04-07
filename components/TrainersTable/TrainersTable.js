import Table from "./Table.compound";
import useTrainers from "@/hooks/use-trainers.hook";
import TableSkeleton from "./Table.skeleton";

export default function TrainersTable() {
  const { isLoading, trainers, setTrainers } = useTrainers();

  if (isLoading) {
    return (
      <div className='max-w-full overflow-x-auto p-5'>
        {[...Array(20).keys()].map((index) => (
          <TableSkeleton key={index} />
        ))}
      </div>
    );
  }

  const sortBySlp = () => {
    const sorted = [...trainers].sort((a, b) => {
      return b.slp - a.slp;
    });
    setTrainers(sorted);
  };

  const sortByAvg = () => {
    const sorted = [...trainers].sort((a, b) => {
      return b.avg - a.avg;
    });
    setTrainers(sorted);
  };

  return (
    <div className='max-w-full overflow-x-auto p-5'>
      <Table>
        {/* <Table.Head> */}
        <Table.TrHead>
          <Table.Td className='w-2/12 md:w-1/12'>#</Table.Td>
          <Table.Td className='w-4/12 md:w-4/12'>Trainers</Table.Td>
          <Table.Td className='md:w-2/12 hidden md:block '>Team</Table.Td>
          <Table.Td className='w-2/12 md:w-1/12' onClick={sortBySlp}>
            SLP
          </Table.Td>
          <Table.Td className='md:w-1/12 hidden md:block'>Avg</Table.Td>
          <Table.Td className='w-2/12 md:w-1/12'>Cups</Table.Td>
          <Table.Td className='w-2/12 md:w-2/12'>Rank</Table.Td>
        </Table.TrHead>
        {/* </Table.Head> */}
        {/* <Table.Body> */}
        {trainers.map((trainer, index) => (
          <Table.Tr ronin={trainer.ronin} key={trainer.ronin}>
            <Table.Td className='w-2/12 md:w-1/12'>
              <Table.Image
                picUrl={trainer.profileFilename}
                name={trainer.name}
                position={index + 1}
              />
            </Table.Td>
            <Table.Td className='w-4/12 md:w-4/12'>{trainer.name}</Table.Td>
            <Table.Td className='md:w-2/12 hidden md:block'>
              {trainer.team}
            </Table.Td>
            <Table.Td className='w-2/12 md:w-1/12'>{trainer.slp}</Table.Td>
            <Table.Td className='md:w-1/12 hidden md:block'>
              {trainer.avg}
            </Table.Td>
            <Table.Td className='w-2/12 md:w-1/12'>{trainer.cups}</Table.Td>
            <Table.Td className='w-2/12 md:w-2/12'>{trainer.rank}</Table.Td>
          </Table.Tr>
        ))}
        {/* </Table.Body> */}
      </Table>
    </div>
  );
}
