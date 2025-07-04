/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `naz` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `myTables` VARCHAR(100) NULL,
    `sync` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nazdel` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `delID` BIGINT NULL,
    `myTables` VARCHAR(100) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `nazdel_delID_myTables_key`(`delID`, `myTables`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_addresses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_id` INTEGER NOT NULL,
    `line1` VARCHAR(50) NOT NULL,
    `line2` VARCHAR(50) NULL,
    `city` VARCHAR(25) NOT NULL,
    `postal_code` VARCHAR(20) NULL,
    `state` VARCHAR(25) NOT NULL,
    `country` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(50) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `company_id`(`company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_adjustments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `reference_no` VARCHAR(55) NOT NULL,
    `warehouse_id` INTEGER NOT NULL,
    `note` TEXT NULL,
    `attachment` VARCHAR(55) NULL,
    `created_by` INTEGER NOT NULL,
    `updated_by` INTEGER NULL,
    `updated_at` DATETIME(0) NULL,
    `count_id` INTEGER NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `warehouse_id`(`warehouse_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_adjustment_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `adjustment_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `option_id` INTEGER NULL,
    `quantity` DECIMAL(15, 4) NOT NULL,
    `warehouse_id` INTEGER NOT NULL,
    `serial_no` VARCHAR(255) NULL,
    `type` VARCHAR(20) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `adjustment_id`(`adjustment_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_brands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(20) NULL,
    `name` VARCHAR(50) NOT NULL,
    `image` VARCHAR(50) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_calendar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(55) NOT NULL,
    `description` VARCHAR(255) NULL,
    `start` DATETIME(0) NOT NULL,
    `end` DATETIME(0) NULL,
    `color` VARCHAR(7) NOT NULL,
    `user_id` INTEGER NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_captcha` (
    `captcha_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `captcha_time` INTEGER UNSIGNED NOT NULL,
    `ip_address` VARCHAR(16) NOT NULL DEFAULT '0',
    `word` VARCHAR(20) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `word`(`word`),
    PRIMARY KEY (`captcha_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(55) NOT NULL,
    `name` VARCHAR(55) NOT NULL,
    `image` VARCHAR(55) NULL,
    `parent_id` INTEGER NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_combo_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `item_code` VARCHAR(20) NOT NULL,
    `quantity` DECIMAL(12, 4) NOT NULL,
    `unit_price` DECIMAL(25, 4) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_id` INTEGER UNSIGNED NULL,
    `group_name` VARCHAR(20) NOT NULL,
    `customer_group_id` INTEGER NULL,
    `customer_group_name` VARCHAR(100) NULL,
    `name` VARCHAR(55) NOT NULL,
    `company` VARCHAR(255) NOT NULL,
    `vat_no` VARCHAR(100) NULL,
    `address` VARCHAR(255) NOT NULL,
    `city` VARCHAR(55) NOT NULL,
    `state` VARCHAR(55) NULL,
    `postal_code` VARCHAR(8) NULL,
    `country` VARCHAR(100) NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `cf1` VARCHAR(100) NULL,
    `cf2` VARCHAR(100) NULL,
    `cf3` VARCHAR(100) NULL,
    `cf4` VARCHAR(100) NULL,
    `cf5` VARCHAR(100) NULL,
    `cf6` VARCHAR(100) NULL,
    `invoice_footer` TEXT NULL,
    `payment_term` INTEGER NULL DEFAULT 0,
    `logo` VARCHAR(255) NULL DEFAULT 'logo.png',
    `award_points` INTEGER NULL DEFAULT 0,
    `deposit_amount` DECIMAL(25, 4) NULL,
    `credit_limit` DECIMAL(25, 4) NOT NULL,
    `price_group_id` INTEGER NULL,
    `price_group_name` VARCHAR(50) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `group_id`(`group_id`),
    INDEX `group_id_2`(`group_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_costing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `product_id` INTEGER NULL,
    `sale_item_id` INTEGER NOT NULL,
    `sale_id` INTEGER NULL,
    `purchase_item_id` INTEGER NULL,
    `quantity` DECIMAL(15, 4) NOT NULL,
    `purchase_net_unit_cost` DECIMAL(25, 4) NULL,
    `purchase_unit_cost` DECIMAL(25, 4) NULL,
    `sale_net_unit_price` DECIMAL(25, 4) NOT NULL,
    `sale_unit_price` DECIMAL(25, 4) NOT NULL,
    `quantity_balance` DECIMAL(15, 4) NULL,
    `inventory` BOOLEAN NULL DEFAULT false,
    `overselling` BOOLEAN NULL DEFAULT false,
    `option_id` INTEGER NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_currencies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(5) NOT NULL,
    `name` VARCHAR(55) NOT NULL,
    `rate` DECIMAL(12, 4) NOT NULL,
    `auto_update` BOOLEAN NOT NULL DEFAULT false,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_customer_groups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `percent` DECIMAL(5, 2) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_date_format` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `js` VARCHAR(20) NOT NULL,
    `php` VARCHAR(20) NOT NULL,
    `sql` VARCHAR(20) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_deliveries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `sale_id` INTEGER NOT NULL,
    `do_reference_no` VARCHAR(50) NOT NULL,
    `sale_reference_no` VARCHAR(50) NOT NULL,
    `customer` VARCHAR(55) NOT NULL,
    `address` VARCHAR(1000) NOT NULL,
    `note` VARCHAR(1000) NULL,
    `status` VARCHAR(15) NULL,
    `attachment` VARCHAR(50) NULL,
    `delivered_by` VARCHAR(50) NULL,
    `received_by` VARCHAR(50) NULL,
    `created_by` INTEGER NULL,
    `updated_by` INTEGER NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_deposits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `company_id` INTEGER NOT NULL,
    `amount` DECIMAL(25, 4) NOT NULL,
    `paid_by` VARCHAR(50) NULL,
    `note` VARCHAR(255) NULL,
    `created_by` INTEGER NOT NULL,
    `updated_by` INTEGER NOT NULL,
    `updated_at` DATETIME(0) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_expenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `reference` VARCHAR(50) NOT NULL,
    `amount` DECIMAL(25, 4) NOT NULL,
    `note` VARCHAR(1000) NULL,
    `created_by` VARCHAR(55) NOT NULL,
    `attachment` VARCHAR(55) NULL,
    `category_id` INTEGER NULL,
    `warehouse_id` INTEGER NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_expense_categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(55) NOT NULL,
    `name` VARCHAR(55) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_gift_cards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `card_no` VARCHAR(20) NOT NULL,
    `value` DECIMAL(25, 4) NOT NULL,
    `customer_id` INTEGER NULL,
    `customer` VARCHAR(255) NULL,
    `balance` DECIMAL(25, 4) NOT NULL,
    `expiry` DATE NULL,
    `created_by` VARCHAR(55) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `sma_gift_cards_card_no_key`(`card_no`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_gift_card_topups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `card_id` INTEGER NOT NULL,
    `amount` DECIMAL(15, 4) NOT NULL,
    `created_by` INTEGER NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `card_id`(`card_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_groups` (
    `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_login_attempts` (
    `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `ip_address` VARBINARY(16) NOT NULL,
    `login` VARCHAR(100) NOT NULL,
    `time` INTEGER UNSIGNED NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_migrations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `version` BIGINT NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_notifications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` TEXT NOT NULL,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `from_date` DATETIME(0) NULL,
    `till_date` DATETIME(0) NULL,
    `scope` BOOLEAN NOT NULL DEFAULT true,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_order_ref` (
    `ref_id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `so` INTEGER NOT NULL DEFAULT 1,
    `qu` INTEGER NOT NULL DEFAULT 1,
    `po` INTEGER NOT NULL DEFAULT 1,
    `to` INTEGER NOT NULL DEFAULT 1,
    `pos` INTEGER NOT NULL DEFAULT 1,
    `do` INTEGER NOT NULL DEFAULT 1,
    `pay` INTEGER NOT NULL DEFAULT 1,
    `re` INTEGER NOT NULL DEFAULT 1,
    `rep` INTEGER NOT NULL DEFAULT 1,
    `ex` INTEGER NOT NULL DEFAULT 1,
    `ppay` INTEGER NOT NULL DEFAULT 1,
    `qa` INTEGER NULL DEFAULT 1,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`ref_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `sale_id` INTEGER NULL,
    `return_id` INTEGER NULL,
    `purchase_id` INTEGER NULL,
    `reference_no` VARCHAR(50) NOT NULL,
    `transaction_id` VARCHAR(50) NULL,
    `paid_by` VARCHAR(20) NOT NULL,
    `cheque_no` VARCHAR(20) NULL,
    `cc_no` VARCHAR(20) NULL,
    `cc_holder` VARCHAR(25) NULL,
    `cc_month` VARCHAR(2) NULL,
    `cc_year` VARCHAR(4) NULL,
    `cc_type` VARCHAR(20) NULL,
    `amount` DECIMAL(25, 4) NOT NULL,
    `currency` VARCHAR(3) NULL,
    `created_by` INTEGER NOT NULL,
    `attachment` VARCHAR(55) NULL,
    `type` VARCHAR(20) NOT NULL,
    `note` VARCHAR(1000) NULL,
    `pos_paid` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `pos_balance` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `approval_code` VARCHAR(50) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_paypal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` BOOLEAN NOT NULL,
    `account_email` VARCHAR(255) NOT NULL,
    `paypal_currency` VARCHAR(3) NOT NULL DEFAULT 'USD',
    `fixed_charges` DECIMAL(25, 4) NOT NULL DEFAULT 2.0000,
    `extra_charges_my` DECIMAL(25, 4) NOT NULL DEFAULT 3.9000,
    `extra_charges_other` DECIMAL(25, 4) NOT NULL DEFAULT 4.4000,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_id` INTEGER NOT NULL,
    `products_index` BOOLEAN NULL DEFAULT false,
    `products_add` BOOLEAN NULL DEFAULT false,
    `products_edit` BOOLEAN NULL DEFAULT false,
    `products_delete` BOOLEAN NULL DEFAULT false,
    `products_cost` BOOLEAN NULL DEFAULT false,
    `products_price` BOOLEAN NULL DEFAULT false,
    `quotes_index` BOOLEAN NULL DEFAULT false,
    `quotes_add` BOOLEAN NULL DEFAULT false,
    `quotes_edit` BOOLEAN NULL DEFAULT false,
    `quotes_pdf` BOOLEAN NULL DEFAULT false,
    `quotes_email` BOOLEAN NULL DEFAULT false,
    `quotes_delete` BOOLEAN NULL DEFAULT false,
    `sales_index` BOOLEAN NULL DEFAULT false,
    `sales_add` BOOLEAN NULL DEFAULT false,
    `sales_edit` BOOLEAN NULL DEFAULT false,
    `sales_pdf` BOOLEAN NULL DEFAULT false,
    `sales_email` BOOLEAN NULL DEFAULT false,
    `sales_delete` BOOLEAN NULL DEFAULT false,
    `purchases_index` BOOLEAN NULL DEFAULT false,
    `purchases_add` BOOLEAN NULL DEFAULT false,
    `purchases_edit` BOOLEAN NULL DEFAULT false,
    `purchases_pdf` BOOLEAN NULL DEFAULT false,
    `purchases_email` BOOLEAN NULL DEFAULT false,
    `purchases_delete` BOOLEAN NULL DEFAULT false,
    `transfers_index` BOOLEAN NULL DEFAULT false,
    `transfers_add` BOOLEAN NULL DEFAULT false,
    `transfers_edit` BOOLEAN NULL DEFAULT false,
    `transfers_pdf` BOOLEAN NULL DEFAULT false,
    `transfers_email` BOOLEAN NULL DEFAULT false,
    `transfers_delete` BOOLEAN NULL DEFAULT false,
    `customers_index` BOOLEAN NULL DEFAULT false,
    `customers_add` BOOLEAN NULL DEFAULT false,
    `customers_edit` BOOLEAN NULL DEFAULT false,
    `customers_delete` BOOLEAN NULL DEFAULT false,
    `suppliers_index` BOOLEAN NULL DEFAULT false,
    `suppliers_add` BOOLEAN NULL DEFAULT false,
    `suppliers_edit` BOOLEAN NULL DEFAULT false,
    `suppliers_delete` BOOLEAN NULL DEFAULT false,
    `sales_deliveries` BOOLEAN NULL DEFAULT false,
    `sales_add_delivery` BOOLEAN NULL DEFAULT false,
    `sales_edit_delivery` BOOLEAN NULL DEFAULT false,
    `sales_delete_delivery` BOOLEAN NULL DEFAULT false,
    `sales_email_delivery` BOOLEAN NULL DEFAULT false,
    `sales_pdf_delivery` BOOLEAN NULL DEFAULT false,
    `sales_gift_cards` BOOLEAN NULL DEFAULT false,
    `sales_add_gift_card` BOOLEAN NULL DEFAULT false,
    `sales_edit_gift_card` BOOLEAN NULL DEFAULT false,
    `sales_delete_gift_card` BOOLEAN NULL DEFAULT false,
    `pos_index` BOOLEAN NULL DEFAULT false,
    `sales_return_sales` BOOLEAN NULL DEFAULT false,
    `reports_index` BOOLEAN NULL DEFAULT false,
    `reports_warehouse_stock` BOOLEAN NULL DEFAULT false,
    `reports_quantity_alerts` BOOLEAN NULL DEFAULT false,
    `reports_expiry_alerts` BOOLEAN NULL DEFAULT false,
    `reports_products` BOOLEAN NULL DEFAULT false,
    `reports_daily_sales` BOOLEAN NULL DEFAULT false,
    `reports_monthly_sales` BOOLEAN NULL DEFAULT false,
    `reports_sales` BOOLEAN NULL DEFAULT false,
    `reports_payments` BOOLEAN NULL DEFAULT false,
    `reports_purchases` BOOLEAN NULL DEFAULT false,
    `reports_profit_loss` BOOLEAN NULL DEFAULT false,
    `reports_customers` BOOLEAN NULL DEFAULT false,
    `reports_suppliers` BOOLEAN NULL DEFAULT false,
    `reports_staff` BOOLEAN NULL DEFAULT false,
    `reports_register` BOOLEAN NULL DEFAULT false,
    `sales_payments` BOOLEAN NULL DEFAULT false,
    `purchases_payments` BOOLEAN NULL DEFAULT false,
    `purchases_expenses` BOOLEAN NULL DEFAULT false,
    `products_adjustments` BOOLEAN NOT NULL DEFAULT false,
    `bulk_actions` BOOLEAN NOT NULL DEFAULT false,
    `customers_deposits` BOOLEAN NOT NULL DEFAULT false,
    `customers_delete_deposit` BOOLEAN NOT NULL DEFAULT false,
    `products_barcode` BOOLEAN NOT NULL DEFAULT false,
    `purchases_return_purchases` BOOLEAN NOT NULL DEFAULT false,
    `reports_expenses` BOOLEAN NOT NULL DEFAULT false,
    `reports_daily_purchases` BOOLEAN NULL DEFAULT false,
    `reports_monthly_purchases` BOOLEAN NULL DEFAULT false,
    `products_stock_count` BOOLEAN NULL DEFAULT false,
    `edit_price` BOOLEAN NULL DEFAULT false,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_pos_register` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `user_id` INTEGER NOT NULL,
    `cash_in_hand` DECIMAL(25, 4) NOT NULL,
    `status` VARCHAR(10) NOT NULL,
    `total_cash` DECIMAL(25, 4) NULL,
    `total_cheques` INTEGER NULL,
    `total_cc_slips` INTEGER NULL,
    `total_cash_submitted` DECIMAL(25, 4) NULL,
    `total_cheques_submitted` INTEGER NULL,
    `total_cc_slips_submitted` INTEGER NULL,
    `note` TEXT NULL,
    `closed_at` TIMESTAMP(0) NULL,
    `transfer_opened_bills` VARCHAR(50) NULL,
    `closed_by` INTEGER NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_pos_settings` (
    `pos_id` INTEGER NOT NULL,
    `cat_limit` INTEGER NOT NULL,
    `pro_limit` INTEGER NOT NULL,
    `default_category` INTEGER NOT NULL,
    `default_customer` INTEGER NOT NULL,
    `default_biller` INTEGER NOT NULL,
    `display_time` VARCHAR(3) NOT NULL DEFAULT 'yes',
    `cf_title1` VARCHAR(255) NULL,
    `cf_title2` VARCHAR(255) NULL,
    `cf_value1` VARCHAR(255) NULL,
    `cf_value2` VARCHAR(255) NULL,
    `receipt_printer` VARCHAR(55) NULL,
    `cash_drawer_codes` VARCHAR(55) NULL,
    `focus_add_item` VARCHAR(55) NULL,
    `add_manual_product` VARCHAR(55) NULL,
    `customer_selection` VARCHAR(55) NULL,
    `add_customer` VARCHAR(55) NULL,
    `toggle_category_slider` VARCHAR(55) NULL,
    `toggle_subcategory_slider` VARCHAR(55) NULL,
    `cancel_sale` VARCHAR(55) NULL,
    `suspend_sale` VARCHAR(55) NULL,
    `print_items_list` VARCHAR(55) NULL,
    `finalize_sale` VARCHAR(55) NULL,
    `today_sale` VARCHAR(55) NULL,
    `open_hold_bills` VARCHAR(55) NULL,
    `close_register` VARCHAR(55) NULL,
    `keyboard` BOOLEAN NOT NULL,
    `pos_printers` VARCHAR(255) NULL,
    `java_applet` BOOLEAN NOT NULL,
    `product_button_color` VARCHAR(20) NOT NULL DEFAULT 'default',
    `tooltips` BOOLEAN NULL DEFAULT true,
    `paypal_pro` BOOLEAN NULL DEFAULT false,
    `stripe` BOOLEAN NULL DEFAULT false,
    `rounding` BOOLEAN NULL DEFAULT false,
    `char_per_line` TINYINT NULL DEFAULT 42,
    `pin_code` VARCHAR(20) NULL,
    `purchase_code` VARCHAR(100) NULL DEFAULT 'purchase_code',
    `envato_username` VARCHAR(50) NULL DEFAULT 'envato_username',
    `version` VARCHAR(10) NULL DEFAULT '3.0.2.24',
    `after_sale_page` BOOLEAN NULL DEFAULT false,
    `item_order` BOOLEAN NULL DEFAULT false,
    `authorize` BOOLEAN NULL DEFAULT false,
    `toggle_brands_slider` VARCHAR(55) NULL,
    `remote_printing` BOOLEAN NULL DEFAULT true,
    `printer` INTEGER NULL,
    `order_printers` VARCHAR(55) NULL,
    `auto_print` BOOLEAN NULL DEFAULT false,
    `customer_details` BOOLEAN NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`pos_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_price_groups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_printers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(55) NOT NULL,
    `type` VARCHAR(25) NOT NULL,
    `profile` VARCHAR(25) NOT NULL,
    `char_per_line` TINYINT UNSIGNED NULL,
    `path` VARCHAR(255) NULL,
    `ip_address` VARBINARY(45) NULL,
    `port` VARCHAR(10) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(50) NOT NULL,
    `name` CHAR(255) NOT NULL,
    `unit` INTEGER NULL,
    `cost` DECIMAL(25, 4) NULL,
    `price` DECIMAL(25, 4) NOT NULL,
    `percent_price` INTEGER NOT NULL,
    `alert_quantity` DECIMAL(15, 4) NULL DEFAULT 20.0000,
    `image` VARCHAR(255) NULL DEFAULT 'no_image.png',
    `category_id` INTEGER NOT NULL,
    `subcategory_id` INTEGER NULL,
    `cf1` VARCHAR(255) NULL,
    `cf2` VARCHAR(255) NULL,
    `cf3` VARCHAR(255) NULL,
    `cf4` VARCHAR(255) NULL,
    `cf5` VARCHAR(255) NULL,
    `cf6` VARCHAR(255) NULL,
    `quantity` DECIMAL(15, 4) NULL DEFAULT 0.0000,
    `tax_rate` INTEGER NULL,
    `track_quantity` BOOLEAN NULL DEFAULT true,
    `details` VARCHAR(1000) NULL,
    `warehouse` INTEGER NULL,
    `barcode_symbology` VARCHAR(55) NOT NULL DEFAULT 'code128',
    `file` VARCHAR(100) NULL,
    `product_details` TEXT NULL,
    `tax_method` BOOLEAN NULL DEFAULT false,
    `type` VARCHAR(55) NOT NULL DEFAULT 'standard',
    `supplier1` INTEGER NULL,
    `supplier1price` DECIMAL(25, 4) NULL,
    `supplier2` INTEGER NULL,
    `supplier2price` DECIMAL(25, 4) NULL,
    `supplier3` INTEGER NULL,
    `supplier3price` DECIMAL(25, 4) NULL,
    `supplier4` INTEGER NULL,
    `supplier4price` DECIMAL(25, 4) NULL,
    `supplier5` INTEGER NULL,
    `supplier5price` DECIMAL(25, 4) NULL,
    `promotion` BOOLEAN NULL DEFAULT false,
    `promo_price` DECIMAL(25, 4) NULL,
    `start_date` DATE NULL,
    `end_date` DATE NULL,
    `supplier1_part_no` VARCHAR(50) NULL,
    `supplier2_part_no` VARCHAR(50) NULL,
    `supplier3_part_no` VARCHAR(50) NULL,
    `supplier4_part_no` VARCHAR(50) NULL,
    `supplier5_part_no` VARCHAR(50) NULL,
    `sale_unit` INTEGER NULL,
    `purchase_unit` INTEGER NULL,
    `brand` INTEGER NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `sma_products_code_key`(`code`),
    INDEX `category_id`(`category_id`),
    INDEX `category_id_2`(`category_id`),
    INDEX `unit`(`unit`),
    INDEX `brand`(`brand`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_product_photos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `photo` VARCHAR(100) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_product_prices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `price_group_id` INTEGER NOT NULL,
    `price` DECIMAL(25, 4) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `product_id`(`product_id`),
    INDEX `price_group_id`(`price_group_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_product_variants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `name` VARCHAR(55) NOT NULL,
    `cost` DECIMAL(25, 4) NULL,
    `price` DECIMAL(25, 4) NULL,
    `quantity` DECIMAL(15, 4) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_purchases` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reference_no` VARCHAR(55) NOT NULL,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `supplier_id` INTEGER NOT NULL,
    `supplier` VARCHAR(55) NOT NULL,
    `warehouse_id` INTEGER NOT NULL,
    `note` VARCHAR(1000) NOT NULL,
    `total` DECIMAL(25, 4) NULL,
    `product_discount` DECIMAL(25, 4) NULL,
    `order_discount_id` VARCHAR(20) NULL,
    `order_discount` DECIMAL(25, 4) NULL,
    `total_discount` DECIMAL(25, 4) NULL,
    `product_tax` DECIMAL(25, 4) NULL,
    `order_tax_id` INTEGER NULL,
    `order_tax` DECIMAL(25, 4) NULL,
    `total_tax` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `shipping` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `grand_total` DECIMAL(25, 4) NOT NULL,
    `paid` DECIMAL(25, 4) NOT NULL DEFAULT 0.0000,
    `status` VARCHAR(55) NULL DEFAULT '',
    `payment_status` VARCHAR(20) NULL DEFAULT 'pending',
    `created_by` INTEGER NULL,
    `updated_by` INTEGER NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `attachment` VARCHAR(55) NULL,
    `payment_term` TINYINT NULL,
    `due_date` DATE NULL,
    `return_id` INTEGER NULL,
    `surcharge` DECIMAL(25, 4) NOT NULL DEFAULT 0.0000,
    `return_purchase_ref` VARCHAR(55) NULL,
    `purchase_id` INTEGER NULL,
    `return_purchase_total` DECIMAL(25, 4) NOT NULL DEFAULT 0.0000,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_purchase_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `purchase_id` INTEGER NULL,
    `transfer_id` INTEGER NULL,
    `product_id` INTEGER NOT NULL,
    `product_code` VARCHAR(50) NOT NULL,
    `product_name` VARCHAR(255) NOT NULL,
    `option_id` INTEGER NULL,
    `net_unit_cost` DECIMAL(25, 4) NOT NULL,
    `quantity` DECIMAL(15, 4) NOT NULL,
    `warehouse_id` INTEGER NOT NULL,
    `item_tax` DECIMAL(25, 4) NULL,
    `tax_rate_id` INTEGER NULL,
    `tax` VARCHAR(20) NULL,
    `discount` VARCHAR(20) NULL,
    `item_discount` DECIMAL(25, 4) NULL,
    `expiry` DATE NULL,
    `subtotal` DECIMAL(25, 4) NOT NULL,
    `quantity_balance` DECIMAL(15, 4) NULL DEFAULT 0.0000,
    `date` DATE NOT NULL,
    `status` VARCHAR(50) NOT NULL,
    `unit_cost` DECIMAL(25, 4) NULL,
    `real_unit_cost` DECIMAL(25, 4) NULL,
    `quantity_received` DECIMAL(15, 4) NULL,
    `supplier_part_no` VARCHAR(50) NULL,
    `purchase_item_id` INTEGER NULL,
    `product_unit_id` INTEGER NULL,
    `product_unit_code` VARCHAR(10) NULL,
    `unit_quantity` DECIMAL(15, 4) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `purchase_id`(`purchase_id`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_quotes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `reference_no` VARCHAR(55) NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `customer` VARCHAR(55) NOT NULL,
    `warehouse_id` INTEGER NULL,
    `biller_id` INTEGER NOT NULL,
    `biller` VARCHAR(55) NOT NULL,
    `note` VARCHAR(1000) NULL,
    `internal_note` VARCHAR(1000) NULL,
    `total` DECIMAL(25, 4) NOT NULL,
    `product_discount` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `order_discount` DECIMAL(25, 4) NULL,
    `order_discount_id` VARCHAR(20) NULL,
    `total_discount` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `product_tax` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `order_tax_id` INTEGER NULL,
    `order_tax` DECIMAL(25, 4) NULL,
    `total_tax` DECIMAL(25, 4) NULL,
    `shipping` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `grand_total` DECIMAL(25, 4) NOT NULL,
    `status` VARCHAR(20) NULL,
    `created_by` INTEGER NULL,
    `updated_by` INTEGER NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `attachment` VARCHAR(55) NULL,
    `supplier_id` INTEGER NULL,
    `supplier` VARCHAR(55) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_quote_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quote_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `product_code` VARCHAR(55) NOT NULL,
    `product_name` VARCHAR(255) NOT NULL,
    `product_type` VARCHAR(20) NULL,
    `option_id` INTEGER NULL,
    `net_unit_price` DECIMAL(25, 4) NOT NULL,
    `unit_price` DECIMAL(25, 4) NULL,
    `quantity` DECIMAL(15, 4) NOT NULL,
    `warehouse_id` INTEGER NULL,
    `item_tax` DECIMAL(25, 4) NULL,
    `tax_rate_id` INTEGER NULL,
    `tax` VARCHAR(55) NULL,
    `discount` VARCHAR(55) NULL,
    `item_discount` DECIMAL(25, 4) NULL,
    `subtotal` DECIMAL(25, 4) NOT NULL,
    `serial_no` VARCHAR(255) NULL,
    `real_unit_price` DECIMAL(25, 4) NULL,
    `product_unit_id` INTEGER NULL,
    `product_unit_code` VARCHAR(10) NULL,
    `unit_quantity` DECIMAL(15, 4) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `quote_id`(`quote_id`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_sales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `reference_no` VARCHAR(55) NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `customer` VARCHAR(55) NOT NULL,
    `biller_id` INTEGER NOT NULL,
    `biller` VARCHAR(55) NOT NULL,
    `warehouse_id` INTEGER NULL,
    `note` VARCHAR(1000) NULL,
    `staff_note` VARCHAR(1000) NULL,
    `total` DECIMAL(25, 4) NOT NULL,
    `product_discount` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `order_discount_id` VARCHAR(20) NULL,
    `total_discount` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `order_discount` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `product_tax` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `order_tax_id` INTEGER NULL,
    `order_tax` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `total_tax` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `shipping` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `grand_total` DECIMAL(25, 4) NOT NULL,
    `sale_status` VARCHAR(20) NULL,
    `payment_status` VARCHAR(20) NULL,
    `payment_term` TINYINT NULL,
    `due_date` DATE NULL,
    `created_by` INTEGER NULL,
    `updated_by` INTEGER NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `total_items` TINYINT NULL,
    `pos` BOOLEAN NOT NULL DEFAULT false,
    `paid` DECIMAL(25, 4) NULL DEFAULT 0.0000,
    `return_id` INTEGER NULL,
    `surcharge` DECIMAL(25, 4) NOT NULL DEFAULT 0.0000,
    `attachment` VARCHAR(55) NULL,
    `return_sale_ref` VARCHAR(55) NULL,
    `sale_id` INTEGER NULL,
    `return_sale_total` DECIMAL(25, 4) NOT NULL DEFAULT 0.0000,
    `rounding` DECIMAL(10, 4) NULL,
    `suspend_note` VARCHAR(255) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_sale_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sale_id` INTEGER UNSIGNED NOT NULL,
    `product_id` INTEGER UNSIGNED NOT NULL,
    `product_code` VARCHAR(55) NOT NULL,
    `product_name` VARCHAR(255) NOT NULL,
    `product_type` VARCHAR(20) NULL,
    `option_id` INTEGER NULL,
    `net_unit_price` DECIMAL(25, 4) NOT NULL,
    `unit_price` DECIMAL(25, 4) NULL,
    `quantity` DECIMAL(15, 4) NOT NULL,
    `warehouse_id` INTEGER NULL,
    `item_tax` DECIMAL(25, 4) NULL,
    `tax_rate_id` INTEGER NULL,
    `tax` VARCHAR(55) NULL,
    `discount` VARCHAR(55) NULL,
    `item_discount` DECIMAL(25, 4) NULL,
    `subtotal` DECIMAL(25, 4) NOT NULL,
    `serial_no` VARCHAR(255) NULL,
    `real_unit_price` DECIMAL(25, 4) NULL,
    `sale_item_id` INTEGER NULL,
    `product_unit_id` INTEGER NULL,
    `product_unit_code` VARCHAR(10) NULL,
    `unit_quantity` DECIMAL(15, 4) NOT NULL,
    `comment` VARCHAR(255) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `sale_id`(`sale_id`),
    INDEX `product_id`(`product_id`),
    INDEX `product_id_2`(`product_id`, `sale_id`),
    INDEX `sale_id_2`(`sale_id`, `product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_sessions` (
    `id` VARCHAR(40) NOT NULL,
    `ip_address` VARCHAR(45) NOT NULL,
    `timestamp` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `data` BLOB NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `ci_sessions_timestamp`(`timestamp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_settings` (
    `setting_id` INTEGER NOT NULL,
    `logo` VARCHAR(255) NOT NULL,
    `logo2` VARCHAR(255) NOT NULL,
    `site_name` VARCHAR(55) NOT NULL,
    `language` VARCHAR(20) NOT NULL,
    `default_warehouse` INTEGER NOT NULL,
    `accounting_method` TINYINT NOT NULL DEFAULT 0,
    `default_currency` VARCHAR(3) NOT NULL,
    `default_tax_rate` INTEGER NOT NULL,
    `rows_per_page` INTEGER NOT NULL,
    `version` VARCHAR(10) NOT NULL DEFAULT '1.0',
    `default_tax_rate2` INTEGER NOT NULL DEFAULT 0,
    `dateformat` INTEGER NOT NULL,
    `sales_prefix` VARCHAR(20) NULL,
    `quote_prefix` VARCHAR(20) NULL,
    `purchase_prefix` VARCHAR(20) NULL,
    `transfer_prefix` VARCHAR(20) NULL,
    `delivery_prefix` VARCHAR(20) NULL,
    `payment_prefix` VARCHAR(20) NULL,
    `return_prefix` VARCHAR(20) NULL,
    `returnp_prefix` VARCHAR(20) NULL,
    `expense_prefix` VARCHAR(20) NULL,
    `item_addition` BOOLEAN NOT NULL DEFAULT false,
    `theme` VARCHAR(20) NOT NULL,
    `product_serial` TINYINT NOT NULL,
    `default_discount` INTEGER NOT NULL,
    `product_discount` BOOLEAN NOT NULL DEFAULT false,
    `discount_method` TINYINT NOT NULL,
    `tax1` TINYINT NOT NULL,
    `tax2` TINYINT NOT NULL,
    `overselling` BOOLEAN NOT NULL DEFAULT false,
    `restrict_user` TINYINT NOT NULL DEFAULT 0,
    `restrict_calendar` TINYINT NOT NULL DEFAULT 0,
    `timezone` VARCHAR(100) NULL,
    `iwidth` INTEGER NOT NULL DEFAULT 0,
    `iheight` INTEGER NOT NULL,
    `twidth` INTEGER NOT NULL,
    `theight` INTEGER NOT NULL,
    `watermark` BOOLEAN NULL,
    `reg_ver` BOOLEAN NULL,
    `allow_reg` BOOLEAN NULL,
    `reg_notification` BOOLEAN NULL,
    `auto_reg` BOOLEAN NULL,
    `protocol` VARCHAR(20) NOT NULL DEFAULT 'mail',
    `mailpath` VARCHAR(55) NULL DEFAULT '/usr/sbin/sendmail',
    `smtp_host` VARCHAR(100) NULL,
    `smtp_user` VARCHAR(100) NULL,
    `smtp_pass` VARCHAR(255) NULL,
    `smtp_port` VARCHAR(10) NULL DEFAULT '25',
    `smtp_crypto` VARCHAR(10) NULL,
    `corn` DATETIME(0) NULL,
    `customer_group` INTEGER NOT NULL,
    `default_email` VARCHAR(100) NOT NULL,
    `mmode` BOOLEAN NOT NULL,
    `bc_fix` TINYINT NOT NULL DEFAULT 0,
    `auto_detect_barcode` BOOLEAN NOT NULL DEFAULT false,
    `captcha` BOOLEAN NOT NULL DEFAULT true,
    `reference_format` BOOLEAN NOT NULL DEFAULT true,
    `racks` BOOLEAN NULL DEFAULT false,
    `attributes` BOOLEAN NOT NULL DEFAULT false,
    `product_expiry` BOOLEAN NOT NULL DEFAULT false,
    `decimals` TINYINT NOT NULL DEFAULT 2,
    `qty_decimals` TINYINT NOT NULL DEFAULT 2,
    `decimals_sep` VARCHAR(2) NOT NULL DEFAULT '.',
    `thousands_sep` VARCHAR(2) NOT NULL DEFAULT ',',
    `invoice_view` BOOLEAN NULL DEFAULT false,
    `default_biller` INTEGER NULL,
    `envato_username` VARCHAR(50) NULL,
    `purchase_code` VARCHAR(100) NULL,
    `rtl` BOOLEAN NULL DEFAULT false,
    `each_spent` DECIMAL(15, 4) NULL,
    `ca_point` TINYINT NULL,
    `each_sale` DECIMAL(15, 4) NULL,
    `sa_point` TINYINT NULL,
    `update` BOOLEAN NULL DEFAULT false,
    `sac` BOOLEAN NULL DEFAULT false,
    `display_all_products` BOOLEAN NULL DEFAULT false,
    `display_symbol` BOOLEAN NULL,
    `symbol` VARCHAR(50) NULL,
    `remove_expired` BOOLEAN NULL DEFAULT false,
    `barcode_separator` VARCHAR(2) NOT NULL DEFAULT '_',
    `set_focus` BOOLEAN NOT NULL DEFAULT false,
    `price_group` INTEGER NULL,
    `barcode_img` BOOLEAN NOT NULL DEFAULT true,
    `ppayment_prefix` VARCHAR(20) NULL DEFAULT 'POP',
    `disable_editing` SMALLINT NULL DEFAULT 90,
    `qa_prefix` VARCHAR(55) NULL,
    `update_cost` BOOLEAN NULL,
    `profit_percent` INTEGER NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`setting_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_skrill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` BOOLEAN NOT NULL,
    `account_email` VARCHAR(255) NOT NULL DEFAULT 'testaccount2@tests.com',
    `secret_word` VARCHAR(20) NOT NULL DEFAULT 'mbtest',
    `skrill_currency` VARCHAR(3) NOT NULL DEFAULT 'USD',
    `fixed_charges` DECIMAL(25, 4) NOT NULL DEFAULT 0.0000,
    `extra_charges_my` DECIMAL(25, 4) NOT NULL DEFAULT 0.0000,
    `extra_charges_other` DECIMAL(25, 4) NOT NULL DEFAULT 0.0000,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_stock_counts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `reference_no` VARCHAR(55) NOT NULL,
    `warehouse_id` INTEGER NOT NULL,
    `type` VARCHAR(10) NOT NULL,
    `initial_file` VARCHAR(50) NOT NULL,
    `final_file` VARCHAR(50) NULL,
    `brands` VARCHAR(50) NULL,
    `brand_names` VARCHAR(100) NULL,
    `categories` VARCHAR(50) NULL,
    `category_names` VARCHAR(100) NULL,
    `note` TEXT NULL,
    `products` INTEGER NULL,
    `rows` INTEGER NULL,
    `differences` INTEGER NULL,
    `matches` INTEGER NULL,
    `missing` INTEGER NULL,
    `created_by` INTEGER NOT NULL,
    `updated_by` INTEGER NULL,
    `updated_at` DATETIME(0) NULL,
    `finalized` BOOLEAN NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `warehouse_id`(`warehouse_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_stock_count_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stock_count_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `product_code` VARCHAR(50) NULL,
    `product_name` VARCHAR(255) NULL,
    `product_variant` VARCHAR(55) NULL,
    `product_variant_id` INTEGER NULL,
    `expected` DECIMAL(15, 4) NOT NULL,
    `counted` DECIMAL(15, 4) NOT NULL,
    `cost` DECIMAL(25, 4) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `stock_count_id`(`stock_count_id`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_suspended_bills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `customer_id` INTEGER NOT NULL,
    `customer` VARCHAR(55) NULL,
    `count` INTEGER NOT NULL,
    `order_discount_id` VARCHAR(20) NULL,
    `order_tax_id` INTEGER NULL,
    `total` DECIMAL(25, 4) NOT NULL,
    `biller_id` INTEGER NULL,
    `warehouse_id` INTEGER NULL,
    `created_by` INTEGER NOT NULL,
    `suspend_note` VARCHAR(255) NULL,
    `shipping` DECIMAL(15, 4) NULL DEFAULT 0.0000,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_suspended_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `suspend_id` INTEGER UNSIGNED NOT NULL,
    `product_id` INTEGER UNSIGNED NOT NULL,
    `product_code` VARCHAR(55) NOT NULL,
    `product_name` VARCHAR(255) NOT NULL,
    `net_unit_price` DECIMAL(25, 4) NOT NULL,
    `unit_price` DECIMAL(25, 4) NOT NULL,
    `quantity` DECIMAL(15, 4) NULL DEFAULT 0.0000,
    `warehouse_id` INTEGER NULL,
    `item_tax` DECIMAL(25, 4) NULL,
    `tax_rate_id` INTEGER NULL,
    `tax` VARCHAR(55) NULL,
    `discount` VARCHAR(55) NULL,
    `item_discount` DECIMAL(25, 4) NULL,
    `subtotal` DECIMAL(25, 4) NOT NULL,
    `serial_no` VARCHAR(255) NULL,
    `option_id` INTEGER NULL,
    `product_type` VARCHAR(20) NULL,
    `real_unit_price` DECIMAL(25, 4) NULL,
    `product_unit_id` INTEGER NULL,
    `product_unit_code` VARCHAR(10) NULL,
    `unit_quantity` DECIMAL(15, 4) NOT NULL,
    `comment` VARCHAR(255) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_tax_rates` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(55) NOT NULL,
    `code` VARCHAR(10) NULL,
    `rate` DECIMAL(12, 4) NOT NULL,
    `type` VARCHAR(50) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_transfers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `transfer_no` VARCHAR(55) NOT NULL,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `from_warehouse_id` INTEGER NOT NULL,
    `from_warehouse_code` VARCHAR(55) NOT NULL,
    `from_warehouse_name` VARCHAR(55) NOT NULL,
    `to_warehouse_id` INTEGER NOT NULL,
    `to_warehouse_code` VARCHAR(55) NOT NULL,
    `to_warehouse_name` VARCHAR(55) NOT NULL,
    `note` VARCHAR(1000) NULL,
    `total` DECIMAL(25, 4) NULL,
    `total_tax` DECIMAL(25, 4) NULL,
    `grand_total` DECIMAL(25, 4) NULL,
    `created_by` VARCHAR(255) NULL,
    `status` VARCHAR(55) NOT NULL DEFAULT 'pending',
    `shipping` DECIMAL(25, 4) NOT NULL DEFAULT 0.0000,
    `attachment` VARCHAR(55) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_transfer_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `transfer_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `product_code` VARCHAR(55) NOT NULL,
    `product_name` VARCHAR(255) NOT NULL,
    `option_id` INTEGER NULL,
    `expiry` DATE NULL,
    `quantity` DECIMAL(15, 4) NOT NULL,
    `tax_rate_id` INTEGER NULL,
    `tax` VARCHAR(55) NULL,
    `item_tax` DECIMAL(25, 4) NULL,
    `net_unit_cost` DECIMAL(25, 4) NULL,
    `subtotal` DECIMAL(25, 4) NULL,
    `quantity_balance` DECIMAL(15, 4) NOT NULL,
    `unit_cost` DECIMAL(25, 4) NULL,
    `real_unit_cost` DECIMAL(25, 4) NULL,
    `date` DATE NULL,
    `warehouse_id` INTEGER NULL,
    `product_unit_id` INTEGER NULL,
    `product_unit_code` VARCHAR(10) NULL,
    `unit_quantity` DECIMAL(15, 4) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `transfer_id`(`transfer_id`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_units` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(10) NOT NULL,
    `name` VARCHAR(55) NOT NULL,
    `base_unit` INTEGER NULL,
    `operator` VARCHAR(1) NULL,
    `unit_value` VARCHAR(55) NULL,
    `operation_value` VARCHAR(55) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `base_unit`(`base_unit`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `last_ip_address` VARBINARY(45) NULL,
    `ip_address` VARBINARY(45) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(40) NOT NULL,
    `salt` VARCHAR(40) NULL,
    `email` VARCHAR(100) NOT NULL,
    `activation_code` VARCHAR(40) NULL,
    `forgotten_password_code` VARCHAR(40) NULL,
    `forgotten_password_time` INTEGER UNSIGNED NULL,
    `remember_code` VARCHAR(40) NULL,
    `created_on` INTEGER UNSIGNED NOT NULL,
    `last_login` INTEGER UNSIGNED NULL,
    `active` BOOLEAN NULL,
    `first_name` VARCHAR(50) NULL,
    `last_name` VARCHAR(50) NULL,
    `company` VARCHAR(100) NULL,
    `phone` VARCHAR(20) NULL,
    `avatar` VARCHAR(55) NULL,
    `gender` VARCHAR(20) NULL,
    `group_id` INTEGER UNSIGNED NOT NULL,
    `warehouse_id` INTEGER UNSIGNED NULL,
    `biller_id` INTEGER UNSIGNED NULL,
    `company_id` INTEGER NULL,
    `show_cost` BOOLEAN NULL DEFAULT false,
    `show_price` BOOLEAN NULL DEFAULT false,
    `award_points` INTEGER NULL DEFAULT 0,
    `view_right` BOOLEAN NOT NULL DEFAULT false,
    `edit_right` BOOLEAN NOT NULL DEFAULT false,
    `allow_discount` BOOLEAN NULL DEFAULT false,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `group_id`(`group_id`, `warehouse_id`, `biller_id`),
    INDEX `group_id_2`(`group_id`, `company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_user_logins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `company_id` INTEGER NULL,
    `ip_address` VARBINARY(16) NOT NULL,
    `login` VARCHAR(100) NOT NULL,
    `time` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_variants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(55) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_warehouses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(50) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `map` VARCHAR(255) NULL,
    `phone` VARCHAR(55) NULL,
    `email` VARCHAR(55) NULL,
    `price_group_id` INTEGER NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_warehouses_products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `warehouse_id` INTEGER NOT NULL,
    `quantity` DECIMAL(15, 4) NOT NULL,
    `rack` VARCHAR(55) NULL,
    `avg_cost` DECIMAL(25, 4) NOT NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `product_id`(`product_id`),
    INDEX `warehouse_id`(`warehouse_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sma_warehouses_products_variants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `option_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `warehouse_id` INTEGER NOT NULL,
    `quantity` DECIMAL(15, 4) NOT NULL,
    `rack` VARCHAR(55) NULL,
    `sync` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `option_id`(`option_id`),
    INDEX `product_id`(`product_id`),
    INDEX `warehouse_id`(`warehouse_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
