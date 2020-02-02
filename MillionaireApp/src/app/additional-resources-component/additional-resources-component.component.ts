import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Component, OnInit } from '@angular/core';
interface FoodNode {
  name: string;
  link: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    name: 'Books', link: '',
    children: [
      {name: 'Rich Dad Poor Dad', link: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=baiernook218-20&language=en_US&marketplace=amazon&region=US&placement=1612680194&asins=1612680194&linkId=811081c66159ad9a622b649da450312f&show_border=true&link_opens_in_new_window=true'},
      {name: 'Dave Ramsey', link: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=baiernook218-20&language=en_US&marketplace=amazon&region=US&placement=1595555277&asins=1595555277&linkId=bb0acb03c6217a0b5bbc6aa962f5c2b1&show_border=true&link_opens_in_new_window=true'},
      {name: 'Compound Effect', link: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=baiernook218-20&language=en_US&marketplace=amazon&region=US&placement=159315724X&asins=159315724X&linkId=3c2924a4cac586f7f1f0018311f45486&show_border=true&link_opens_in_new_window=true'},
      {name: 'Millionaire Next Door', link: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=baiernook218-20&language=en_US&marketplace=amazon&region=US&placement=1589795474&asins=1589795474&linkId=d1da69a12cdf3519dede114afe429675&show_border=true&link_opens_in_new_window=true'},
      {name: 'Tony Robbins', link: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=baiernook218-20&language=en_US&marketplace=amazon&region=US&placement=B00Q6O59KA&asins=B00Q6O59KA&linkId=36e2800b179be9fb4e279a0a31c50407&show_border=true&link_opens_in_new_window=true'}
    ]
  }
  ,{
    name: 'Videos', link: '',
    children: [
      {
        name: 'How To Avoid Credit Card Interest', link : 'https://www.youtube.com/watch?v=79H5n646bYA'
      }
    ]
  }
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-additional-resources-component',
  templateUrl: './additional-resources-component.component.html',
  styleUrls: ['./additional-resources-component.component.css']
})
export class AdditionalResourcesComponentComponent implements OnInit {
  ngOnInit() {
  }
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      link: node.link,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
