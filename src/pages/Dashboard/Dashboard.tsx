import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/shared/Card";
import Modal from "../../components/shared/Modal";
import Backdrop from "../../components/UI/BackDrop";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const Dashboard = (props: Props) => {
  const HOME_CARDS = [
    { id: 1, title: "Pep Tokens", amount: 30 },
    { id: 2, title: "Pep Tokens", amount: 30 },
    { id: 3, title: "Pep Tokens", amount: 30 },
    { id: 4, title: "Pep Tokens", amount: 30 },
  ];

  const HOME_CARDS_TWO = [
    { id: 1, title: "Pep Tokens", amount: 30 },
    { id: 2, title: "Pep Tokens", amount: 30 },
    { id: 3, title: "Pep Tokens", amount: 30 },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <Layout toggleModal={setShowModal} modalState={showModal}>
      <>
        {showModal && (
          <>
            <Modal classNames="bg-deepDark shadow-4xl">
              <>
                <div className="flex items-center justify-between">
                  <div className="bg-deepDark p-10">
                    <h2>Wallet</h2>
                  </div>
                  <div className="mr-auto" onClick={() => setShowModal(false)}>
                    <AiOutlineClose size={24} />
                  </div>
                </div>
                <div className="bg-lightDark p-5">
                  <h2>Content</h2>
                </div>
              </>
            </Modal>
          </>
        )}
        {showModal && <Backdrop />}
        <section className="mt-4">
          <p className="text-gray-500 py-5">
            Direct Property Pepereum Token Revolution. Go to Purchase Token to
            receive a special BONUS!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-500 ">
            {HOME_CARDS.map((card) => (
              <Card
                classNames="bg-deepDark flex flex-col items-center justify-center py-8"
                key={card.id}
              >
                <h2>{card.title}</h2>
                <p>{card.amount}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-500 mt-6">
            {HOME_CARDS_TWO.map((card, index) => (
              <Card
                classNames={`bg-deepDark flex flex-col items-center justify-center py-8 ${
                  index == 0 && "gradient-bg-img"
                }`}
                key={card.id}
              >
                <h2>
                  {card.title} {index}
                </h2>
                <p>{card.amount}</p>
              </Card>
            ))}
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Dashboard;
