import { FosDataContent, IFosNode } from "@fosforescent/fosforescent-js";
import { TrellisNodeClass, TrellisNodeInterface, TrellisSerializedData } from "@syctech/react-trellis";



class FosWrapper implements TrellisNodeInterface<FosWrapper> {


  constructor(private node: IFosNode) {

  }



  setChildren(children: FosWrapper[]): void {
    const nodeType = this.node.getNodeType()
    if(nodeType === "option"){
      const selectedChildIndex = this.node.getData().option?.selectedIndex || 0
      const selectedChild = this.node.getChildren()[selectedChildIndex]
      if (!selectedChild){
        console.log('option info', this.node, this.node.getChildren())
        throw new Error('selectedChild not found')
      }
      selectedChild.setChildren(children.map(child => child.fosNode()))
    } else if (nodeType === "task"){
      this.node.setChildren(children.map(child => child.fosNode()))
    } else if (nodeType === "root"){
      this.node.setChildren(children.map(child => child.fosNode()))
    } else {
      throw new Error(`Method not implemented for type ${nodeType}.`);
    }

  }


  getChildren(): FosWrapper[] {
    const nodeType = this.node.getNodeType()
    if (this.node.getChildren().length === 0){
      return []
    }
    if (nodeType === "option"){
      const selectedIndex = this.node.getData().option?.selectedIndex || 0
      const selectedChild = this.node.getChildren()[selectedIndex] ||  this.node.getChildren()[0]
      if (!selectedChild){
        console.log('option info', this.node, this.node.getChildren(), this.node.getData())
        throw new Error('selectedChild not found')
      }
      return selectedChild.getChildren().map(child => new FosWrapper(child))
    } else if (nodeType === "task"){
      return this.node.getChildren().map(child => new FosWrapper(child))
    } else if (nodeType === "root"){
      return this.node.getChildren().map(child => new FosWrapper(child))
    } else {
      throw new Error(`Method not implemented for type ${this.node.getNodeType()}.`);
    }
  }


  getOptions(): FosWrapper[] {
    const nodeType = this.node.getNodeType()
    if (nodeType === "option"){
      return this.node.getChildren().map(child => new FosWrapper(child))
    } else if (nodeType === "task"){
      return [new FosWrapper(this.node)]
    } else {
      throw new Error(`Method not implemented for type ${nodeType}.`);
    }
  }

  setOptions(options: FosWrapper[]): void {
    const nodeType = this.node.getNodeType()
    if (nodeType === "option"){
      if (options.length > 0){
        this.node.setChildren(options.map(option => option.fosNode()))
      } else {
        // set child to option, then snip option
        // this.node.setChildren(options.map(option => option.fosNode()))
        const currentParent = this.getParent()
        if (!currentParent){
          throw new Error('Cannot set options on option with no parent')
        }
        const currentParentChildren = currentParent?.getChildren() || []
        const singleOption = options[0]!

        const updatedChildren = currentParentChildren.map(child => {
          if (child.getId() === this.getId()){
            return singleOption
          } else {
            return child
            }
        });
        currentParent.setChildren(updatedChildren)
      }
    } else if (nodeType === "task"){
        console.log('setOptions', options.map(option => option.getId()), nodeType, options.length)
      if (options.length > 1){
        const currentParent = this.getParent()
        if (!currentParent){
          throw new Error('Cannot set options on option with no parent')
        }
        const optionNode = currentParent.newChild("option")
        optionNode.setChildren(options)
        const currentParentChildren = this.getParent()?.getChildren() || []
        const newParentChildren = currentParentChildren.map(child => {
          if (child.getId() === this.getId()){
            return optionNode
          } else {
            return child
          }
        });
      } else {
        throw new Error('Cannot set option on task with less than 2 options')        
      }
    } else if (nodeType === "root"){
      throw new Error(`Method not implemented for type ${nodeType}.`);
    }
  }

  getId(): string {
    return this.node.getId()
  }


  newChild(nodeType: string | null = null): FosWrapper {
    console.log('newChild', nodeType, this.node.getNodeType())
    const newChildNode = this.node.newChild(nodeType)
    return new FosWrapper(newChildNode)
  }

  getString(): string {
    const thisNodeString =  this.node.getString()
    return thisNodeString
  }

  setString(value: string): void {
    this.node.setString(value)
  }

  getParent(): FosWrapper | null {
    const parentNode = this.node.getParent()
    if (!parentNode) {
      return null
    }
    return new FosWrapper(parentNode)
  }
  
  getData(): FosDataContent {
    return this.node.getData()
  }

  setData(data: FosDataContent): void {
    this.node.setData(data)
  }

  getNodeType(): string {
    return this.node.getNodeType()
  }

  fosNode(): IFosNode {
    return this.node
  }

  addOption(): FosWrapper {
    const nodeType = this.node.getNodeType()
    if (nodeType === "option"){
      const optionNode = this.newChild("option")
      this.setOptions(this.getOptions().concat([optionNode]) )
      const newOption = this.getOptions().find((option, index) => {
        return option.getId() === optionNode.getId()
      })
      if (!newOption){
        throw new Error('new option not found')
      }
      return newOption
    } else {
      throw new Error('Cannot add option to : ' + nodeType)
    }
  }

  getRoute(): FosWrapper[] {
    const parent = this.getParent()
    if (!parent){
      return [this]
    } else {
      return parent.getRoute().concat([this])
    }
  }
}


export {
  FosWrapper
}