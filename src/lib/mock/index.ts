import { th } from "date-fns/locale";
import { IFosInstance, FosOptions, IFosInterpreter } from "fosforescent-js";

enum TodoStatus {
  completed = 'completed',
  notCompleted = 'notCompleted'
}


interface WorkflowProps {
  deps: WorkflowProps[]
  value: {
    description: string
  }
}



export class MockFosInstance implements IFosInstance<any> {

  constructor(options: FosOptions) {
    console.log('options', options)
  }

  getInstruction() {
    throw new Error("Method not implemented.");

  }

  setInstruction() {
    throw new Error("Method not implemented.");
  }


  getValue(): WorkflowProps {
    throw new Error("Method not implemented.");
  }

  updateValue(value: WorkflowProps): void {
    throw new Error("Method not implemented.");
  }

  registerAction(action: string, callback: (node: IFosInstance<any>) => Promise<IFosInstance<any>>): void {
    throw new Error("Method not implemented.");
  }

  doAction(action: string): Promise<IFosInstance<any>> {
    throw new Error("Method not implemented.");
  }
  
}

export const MockFos = (
    options: Partial<FosOptions> = {}
) => {
  const fullOptions = {
    ...options,

  }
  return new MockFosInstance(fullOptions)
}