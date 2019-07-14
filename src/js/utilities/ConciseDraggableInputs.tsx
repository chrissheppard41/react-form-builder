import {ComponentListType} from '../types/ComponentListType';

export default (ComponentList: ComponentListType) => {
    const filterArray: Array<any> = [];
    
    return Object.keys(ComponentList).filter((key: any) => {
        const Component: any = ComponentList[key];
    
        if(filterArray.includes(Component.Input.name)) {
            return false;
        }
    
        filterArray.push(Component.Input.name);
        return true;
    })
}
