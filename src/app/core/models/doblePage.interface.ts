export interface PagesDoubleTools {
  pagesDouble: 'PageDouble1' | 'PageDouble2' | 'PageDouble3';
  BackgroundPages: string;
  pageActive: boolean;
}

export interface PageDoubleDataInter {
  title: string;
  info: string;
  pages: PagesDoubleTools;
  button: string;
  link: string;
  imagenBackground: string;
}

export interface PagesTripleTools {
  pagesTriple: 'PageTriple1' | 'PageTriple2';
  pageTripleActive: boolean;
}

export interface PageTripleInfo {
  info1?: string; 
  info2?: string;
  info3?: string;
}

export interface PageTripleButtons {
  button1?: string;
  button2?: string;
  button3?: string;
}

export interface PageTripleDataInter {
  info: PageTripleInfo;
  buttons: PageTripleButtons;
  link: string;
  pages: PagesTripleTools;
}