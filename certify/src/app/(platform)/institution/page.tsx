import { CardForm } from "@/components/card-form";
import { CreateInstitutionForm } from "./_components/institution-form";
import BackButton from "@/components/back-button";

export default function CreateInstitutionPage() {
  return (
    <>
    <div className="flex justify-center   h-full ">
      <BackButton/>
      <CardForm
        title="
      Create Institution
      "
        description="
      Enter the name of the institution and connect your wallet
      "
      >
        <CreateInstitutionForm />
      </CardForm>
    </div>
    </>
  );
}
