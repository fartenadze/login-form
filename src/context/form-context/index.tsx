import { ReactNode, createContext, useContext, useState } from "react";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  password: string;
};

export const defaultUser: User = {
  id: 0,
  firstName: "",
  lastName: "",
  birthDate: "",
  gender: "Male",
  email: "",
  password: "",
};

type FormContextType = {
  formData: User;
  setFormData: (formData: User) => void;
};

export const defaultForm: FormContextType = {
  formData: defaultUser,
  setFormData: () => {},
};

export const FormContext = createContext<FormContextType>(defaultForm);

type ProviderProps = {
  children: ReactNode;
};

export const useFormData = () => {
  const { formData, setFormData } = useContext(FormContext);
  return { formData, setFormData };
};

export const FormProvider = ({ children }: ProviderProps) => {
  const [formData, setFormData] = useState<User>(defaultUser);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
