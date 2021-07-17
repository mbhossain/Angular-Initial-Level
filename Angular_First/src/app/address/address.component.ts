import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { IListDescription } from "./interface/interface";

@Component({
  selector: 'app-address',
  // template: `Address component`
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  public description: IListDescription;
  public listOfAddress = [{
    name: "Mohammad Belal",
    thana: "Kumarkhaly",
    district: "Kushtia"
  }]

  constructor() { }

  ngOnInit(): void {
    this.addressList();
  }
  addressList() {
    this.description = {
      fields: [
        { name: 'Name', field: 'name' },
        { name: 'Thana', field: 'thana' },
        { name: 'District', field: 'district' },
      ],
      dataLoader: () => of(this.listOfAddress),
      // buttons: [
      //   {
      //     listener: row => this.route.navigate([`/audit/pae/edit/${row.oid}`]),
      //     text: 'Detail',
      //     icon: 'open_with',
      //   },
      //   {
      //     listener: row => this.route.navigate([`/audit/pae/edit/${row.oid}`]),
      //     text: 'Update',
      //     icon: 'edit',
      //   },
      // ]
    };
  }

}
