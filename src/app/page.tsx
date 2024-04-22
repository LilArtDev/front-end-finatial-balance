import { HighlightInfo } from "@/components/HighlightInfo/highlight-info.component";
import CurrencyIcon from "@/assets/svg/currency-icon.svg";
import CurrencyInIcon from "@/assets/svg/currency-in-icon.svg";
import CurrencyOutIcon from "@/assets/svg/currency-out-icon.svg";
import { toCurrency } from "@/shared/utils";
import { format } from "date-fns";

enum TRANSACTION_TYPE {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
}
interface Transaction {
  id: string;
  transactionDate: string;
  value: number;
  title: string;
  description: string;
  type: TRANSACTION_TYPE;
}

export default function Home() {
  const transactions: Transaction[] = Array.from(
    { length: 10 },
    (_, index) => ({
      id: index.toString(),
      transactionDate: new Date("2024-03-12").toISOString(),
      value: 10_000,
      title: "PayPal LTDA",
      description: "compra de Riot Points",
      type: TRANSACTION_TYPE["INCOME"],
    })
  );

  function renderIconByTransactionType(transactionType: TRANSACTION_TYPE) {
    const listItemIconClassName = "size-8 h-fit my-auto";
    if (transactionType === TRANSACTION_TYPE.INCOME)
      return <CurrencyInIcon className={listItemIconClassName} />;
    if (transactionType === TRANSACTION_TYPE.OUTCOME)
      return <CurrencyOutIcon className={listItemIconClassName} />;
  }

  return (
    <main className="mx-10 my-12 h-[screen-2] lg:ml-32">
      <div className="flex flex-col sm:flex-row justify-between gap-1">
        <h2 className="text-primary text-3xl font-bold m-auto mt-1 sm:mx-0 ">
          Finantial Balance
        </h2>
        <button className="text-sm max-w-[192px] max-h-[44px] py-2 px-4 mt-2 text-white bg-primary rounded-lg font-bold shadow-sm shadow-primary m-auto sm:mx-0 sm:mt-0">
          Nova Transação
        </button>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-5 mt-3">
        <HighlightInfo
          currency="U$"
          label="Entradas do Mês"
          value={10000}
          icon={<CurrencyInIcon className="size-8" />}
        />
        <HighlightInfo
          currency="U$"
          label="Saídas do Mês"
          value={10000}
          icon={<CurrencyOutIcon className="size-8" />}
          className="text-primary"
        />
        <HighlightInfo
          currency="U$"
          label="Balanço"
          value={10000}
          icon={<CurrencyIcon className="size-8" />}
          className="ml-auto md:bg-opacity-20 md:bg-secondary"
        />
      </div>
      <section className="mt-8 h-2/5">
        <div></div>
        <div className="overflow-y-scroll h-full md:h-full">
          {transactions.map((element) => (
            <div key={element.id} className="bg-backgrondSec flex flex-row justify-start content-center mb-2 py-4 px-3 rounded-lg">
              {renderIconByTransactionType(element.type)}
              <div className="ml-3">
                <h4 className="text-gray text-sm">{element.title}</h4>
                <p className="text-white font-bold ">{toCurrency(element.value)}</p>
              </div>
              <p className="h-fit my-auto text-gray text-xs ml-auto">
                {format(element.transactionDate, 'dd/MM/yy')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
