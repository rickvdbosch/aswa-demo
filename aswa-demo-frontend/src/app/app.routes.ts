import { Routes } from '@angular/router';
import { HomeComponent } from './components/HomeComponent/home.component';
import { GetDataComponent } from './components/GetDataComponent/getdata.component';
import { AboutComponent } from './components/AboutComponent/about.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'get-data',
		component: GetDataComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}
];
