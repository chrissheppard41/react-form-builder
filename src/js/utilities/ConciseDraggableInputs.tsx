import {ComponentListType, ComponentType, ComponentNameType} from '../types/ComponentListType';

export default (ComponentList: ComponentListType): ComponentNameType => {
    const filterArray: ComponentNameType = [];
    
    return Object.keys(ComponentList).filter((key: any): boolean => {
        const Component: ComponentType = ComponentList[key];

        if(filterArray.includes(Component.Input.name)) {
            return false;
        }
    
        filterArray.push(Component.Input.name);
        return true;
    })
}
