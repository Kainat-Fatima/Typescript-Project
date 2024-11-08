import ListItems from "./ListItem";
interface List {
    list: ListItems[],
    load(): void,
    save(): void,
    addItem(itemObj: ListItems): void,
    removeItem(id: string): void,
    clearList(): void
}

export default class FullList implements List {
    static instance: FullList = new FullList();
    private constructor(private _list: ListItems[] = []) { }

    get list(): ListItems[] {
        return this._list;
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("MyList");
        if (typeof storedList !== "string") return;
        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList);
        parsedList.forEach(itemObj => {
            const newListItem = new ListItems(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem);
        });
        this.sortList();
    }

    save(): void {
        localStorage.setItem("MyList", JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    addItem(itemObj: ListItems): void {
        this._list.push(itemObj);
        this.sortList();
        this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }

    private sortList(): void {
        this._list.sort((a, b) => Number(a.checked) - Number(b.checked));
    }
}
