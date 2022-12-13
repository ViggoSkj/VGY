<?php

class DatabaseHandler {

    private PDO $connection;

    public function __construct() {
        $this->connect("127.0.0.1", "socialcase", "root", "", 3307); // todo change
    }

    private function connect(string $dbHost, string $dbName, string $username, string $password, int $dbPort) {
        try {
            $this->connection = new PDO("mysql:host=".$dbHost.";dbname=".$dbName.";port=".$dbPort.";", $username, $password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch(Exception $e) {
            throw $e;
        }
    }

    protected function Execute(string $sqlStatement = "", array $params = []) {
        try {
            $stmt = $this->connection->prepare($sqlStatement);
            $stmt->execute($params);
            return $stmt;
        } catch(PDOException $e) {
            throw $e;
        }
    }

    protected function Select(string $sqlStatement = "", array $params = []) {
        try {
            $stmt = $this->execute($sqlStatement, $params);
            return $stmt->fetchAll();
        } catch(PDOException $e) {
            throw $e;
        }
    }

    protected function Insert(string $sqlStatement = "", array $params = []) {
        try {
            $stmt = $this->execute($sqlStatement, $params);
            return $this->connection->lastInsertId();
        } catch(PDOException $e) {
            throw $e;
        }
    }

    protected function Update(string $sqlStatement = "", array $params = []) {
        try {
            $this->execute($sqlStatement, $params);
        } catch(Exception $e) {
            throw $e;
        }
    }

    protected function Delete(string $sqlStatement = "", array $params = []) {
        try {
            $stmt = $this->execute($sqlStatement, $params);
        } catch(Exception $e) {
            throw $e;
        }
    }

    
}