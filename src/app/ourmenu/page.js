import React from "react";
import CoverBackground from "../Components/SmallComponents/CoverBackground";
import { Center } from "../Components/SmallComponents/Center";

const VerticalCard = ({ img, name, description, rate }) => {
  return (
    <div className="bg-[#121A1D] lg:w-[600px] h-[160px] mx-3">
      <div className="flex">
        <div>
          <img src={img} alt="verticalCard1" className="w-[250px] h-[160px]" />
        </div>
        <div className="lg:w-[600px] p-5 flex flex-col">
          <div className="flex items-center">
            <h2 className="text-2xl">
              {name}
              <span className="text-[#314555] select-none">..............</span>
            </h2>
            <h4 className="text-2xl">${rate}</h4>
          </div>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function OurMenu() {
  return (
    <div>
      <CoverBackground
        background={"ourMenuBackground"}
        title={"MORE FLAVOR FOR LESS"}
        heading={"Our Menu"}
        para={
          "When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat"
        }
        leftCornerImage={"/contact-left-covert.png"}
        rightCornerImage={"/contact-right-cover.png"}
      />
      
      {/* Drink */}
      <Center
        heading={"Drinks"}
        para={
          "Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam. Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam."
        }
      />
      <div className="flex items-center justify-center flex-wrap gap-8">
        <VerticalCard
          img={"/drink1.jpeg"}
          name={"Dark Coffee"}
          description={"Consectetur adipisicing elit. Soluta, impedit, saepe."}
          rate={"1.50"}
        />
        <VerticalCard
          img={"/drink2.jpeg"}
          name={"Espresso Martini"}
          description={"Consectetur adipisicing elit. Soluta, impedit, saepe."}
          rate={"3.50"}
        />
        <VerticalCard
          img={"/drink3.jpeg"}
          name={"Coffee Beverage"}
          description={"Consectetur adipisicing elit. Soluta, impedit, saepe."}
          rate={"7.50"}
        />
        <VerticalCard
          img={"/drink4.jpeg"}
          name={"Cold Americano"}
          description={"Consectetur adipisicing elit. Soluta, impedit, saepe."}
          rate={"10.50"}
        />

        {/* Desserts */}
        <Center
          heading={"Desserts"}
          para={
            "Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam"
          }
        />
        <div className="flex items-center justify-center flex-wrap gap-8">
          <VerticalCard
            img={"/Desserts1.jpeg"}
            name={"Bacon & Eggs"}
            description={
              "Consectetur adipisicing elit. Soluta, impedit, saepe."
            }
            rate={"1.50"}
          />
          <VerticalCard
            img={"/Desserts2.jpeg"}
            name={"Fruit Salad"}
            description={
              "Consectetur adipisicing elit. Soluta, impedit, saepe."
            }
            rate={"3.50"}
          />
          <VerticalCard
            img={"/Desserts3.jpeg"}
            name={"Burger"}
            description={
              "Consectetur adipisicing elit. Soluta, impedit, saepe."
            }
            rate={"7.50"}
          />
          <VerticalCard
            img={"/Desserts4.jpeg"}
            name={"Cack"}
            description={
              "Consectetur adipisicing elit. Soluta, impedit, saepe."
            }
            rate={"10.50"}
          />
        </div>

        {/* Dishes */}
        <Center
          heading={"Dishes"}
          para={
            "Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam"
          }
        />
        <div className="flex items-center justify-center flex-wrap gap-8">
          <VerticalCard
            img={"/Desserts1.jpeg"}
            name={"Bacon & Eggs"}
            description={
              "Consectetur adipisicing elit. Soluta, impedit, saepe."
            }
            rate={"1.50"}
          />
          <VerticalCard
            img={"/Desserts2.jpeg"}
            name={"Fruit Salad"}
            description={
              "Consectetur adipisicing elit. Soluta, impedit, saepe."
            }
            rate={"3.50"}
          />
          <VerticalCard
            img={"/Desserts3.jpeg"}
            name={"Burger"}
            description={
              "Consectetur adipisicing elit. Soluta, impedit, saepe."
            }
            rate={"7.50"}
          />
          <VerticalCard
            img={"/Desserts4.jpeg"}
            name={"Cack"}
            description={
              "Consectetur adipisicing elit. Soluta, impedit, saepe."
            }
            rate={"10.50"}
          />
        </div>
      </div>
    </div>
  );
}
