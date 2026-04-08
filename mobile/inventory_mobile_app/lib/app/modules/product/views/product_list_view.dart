import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/product_list_controller.dart';
import '../../../routes/app_routes.dart';

class ProductListView extends GetView<ProductListController> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Products')),
      body: Obx(() {
        if (controller.isLoading.value) {
          return Center(child: CircularProgressIndicator());
        }

        if (controller.productList.isEmpty) {
          return Center(child: Text("Data kosong"));
        }

        return RefreshIndicator(
          onRefresh: controller.fetchProducts,
          child: ListView.builder(
            itemCount: controller.productList.length,
            itemBuilder: (context, index) {
              final product = controller.productList[index];

              return Card(
                margin: EdgeInsets.all(8),
                child: ListTile(
                  title: Text(
                    product.name,
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                  trailing: Text(
                    'Qty: ${product.quantity}',
                    style: TextStyle(fontSize: 16),
                  ),
                  onTap: () {
                    Get.toNamed(Routes.PRODUCT_DETAIL, arguments: product.id);
                  },
                ),
              );
            },
          ),
        );
      }),
    );
  }
}
